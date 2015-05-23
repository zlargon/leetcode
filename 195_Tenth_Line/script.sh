#!/bin/bash

# Tenth Line
# https://leetcode.com/problems/tenth-line/

n=1
cat "file.txt" | while read line
do
    if [ $n == 10 ] ; then
        echo $line
    fi
    n=$(( $n + 1 ))
done
