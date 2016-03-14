#!/bin/bash
awk -F, '{cmd="echo  $2"   $7"   $1 >> output";  system(cmd)}' SF04.csv
