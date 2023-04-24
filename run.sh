#! /bin/sh
REPORT_DATE="$(date +%Y-%m-%d_%H-%M-%S)"
k6 run --config config.json --out csv="reports/report_$REPORT_DATE.csv" tests/main.js;
