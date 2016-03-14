#!/bin/bash
awk -F, '{cmd="echo "$6" >> output";  system(cmd)}' SF04.csv
