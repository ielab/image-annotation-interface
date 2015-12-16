#!/bin/bash

rm db.sqlite3
./manage.py syncdb
./import_clusters.py db.sqlite3 cluster.json
./manage.py runserver
