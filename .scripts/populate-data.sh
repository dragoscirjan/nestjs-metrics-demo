#! /bin/bash
set -ex

NESTJS_HOST=${NESTJS_HOST:-localhost}

MAX_SEC_WAIT=${MAX_SEC_WAIT:-3}

MAX_THREADS=${MAX_THREADS:-10}

ENDPOINTS=(
    /
    /test2
    /test3
    /test4
    /test5
)

while [[ 1 -eq 1 ]]; do

    for count in $(seq 1 $(($RANDOM % $MAX_THREADS))); do
        index=$(($RANDOM % ${#ENDPOINTS[@]}))
        echo "http://$NESTJS_HOST:3000${ENDPOINTS[$index]}"; 
    done \
        | parallel -j 4 curl -sSL {}

    # echo curl -sSL http://$NESTJS_HOST:3000

    echo .

    sleep $(($RANDOM % $MAX_SEC_WAIT))
done