#!/usr/bin/python
import json, sqlite3, sys, os, base64

def main(args):

    if len(args) < 2:
        print("Incorrent number of command line arguments")
        sys.exit(2)

    cluster_name = args[0]
    output_file = args[1]

    fp = open(output_file, "wb")

    images = []

    for path in os.walk(cluster_name):
        image_name = path[0] + "/" + path[2][0]
        with open(image_name, "rb") as f:
            data = f.read()
            images.append(base64.b64encode(data))
        print path[0] + "/" + path[2][0]
        # images.append(path[2][0])

    json_obj = []
    query_num = 0

    for image in images:
        json_obj.append({
            "image" : image,
            "queryType" : "test",
            "qId" : "trec2014-" + str(query_num)
        })
        query_num += 1

    fp.write(json.dumps(json_obj[0], sort_keys=True, indent=4, separators=(',', ': ')))

if __name__ == "__main__":
    main(sys.argv[1:])
