# Simulate self-healing
import os

def check_service(service):
    if not os.path.exists('/tmp/service_up'):  # Mock check
        print('Healing...')
        os.system('touch /tmp/service_up')

check_service('backend')