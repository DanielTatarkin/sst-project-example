import json
from datetime import datetime


def handler(event, context):
    data = {
        "msg": f"Hello World. The Python time is {datetime.today()}"
    }
    
    return {
        'statusCode': 200,
        'body': json.dumps(data, indent=None)
    }
