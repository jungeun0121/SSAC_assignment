#!/bin/bash

function errMsg() {
    echo ">>> You entered it incorrectly"
    echo ">>> usage) start mysql or nginx"
}

function commandToStart() {

    NAME=""
    if [ $1 == "mysql" ]; then
        NAME="${1}d"
    else
        NAME=$1
    fi

    echo `/usr/bin/systemctl start ${NAME}`

}



if [ $# -eq 1 ]; then
    case $1 in
        mysql | mysqld | nginx) commandToStart $1 ;;
        *) errMsg;;
    esac
else
    errMsg
fi