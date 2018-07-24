Host:
(NLP Engine)
ec2-13-229-73-34.ap-southeast-1.compute.amazonaws.com

(Admin Panel)
ec2-13-250-40-247.ap-southeast-1.compute.amazonaws.com


To access your instance:

Open an SSH client. (find out how to connect using PuTTY)
Locate your private key file (Wilson-Key.pem). The wizard automatically detects the key you used to launch the instance.

Your key must not be publicly viewable for SSH to work. Use this command if needed:
chmod 400 Wilson-Key.pem

Connect to your instance using its Public DNS:
ec2-13-229-73-34.ap-southeast-1.compute.amazonaws.com

Example:
ssh -i "Wilson-Key.pem" ubuntu@ec2-13-229-73-34.ap-southeast-1.compute.amazonaws.com

ssh -i "Wilson-Key.pem" ubuntu@ec2-54-169-157-173.ap-southeast-1.compute.amazonaws.com