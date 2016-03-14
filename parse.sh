#!/bin/bash
awk -F, '{cmd="echo "$6" >> output.txt";  system(cmd)}' SF04.csv
