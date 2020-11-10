# git clone https://github.com/zfhrp6/isucon10-qualify ~/isucon

# ssh する
sudo apt -y update && sudo apt -y upgrade;
sudo apt -y install make python3-pip docker-compose;
wget https://golang.org/dl/go1.15.4.linux-amd64.tar.gz && tar -C $HOME -xzf go1.15.4.linux-amd64.tar.gz;
export PATH=$PATH:$HOME/go/bin;
echo 'export PATH=$PATH:$HOME/go/bin' >> ~/.bashrc;
export GOPATH=~/go;
echo 'export GOPATH=~/isucon/go' >> ~/.bashrc;
go get github.com/orisano/wayt;

cd ~/isucon/initial-data;
pip3 install -r requirements.txt;
sudo usermod -aG docker $USER;
sudo systemctl enable docker;
sudo reboot;
