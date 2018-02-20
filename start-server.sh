#! /bin/bash
cd /home/gelens_imre/silksage-app
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa" git pull
sudo npm install --no-progress
nohup npm run start &
