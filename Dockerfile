FROM ubuntu:22:04
CMD [ "/bin/bash" ]

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git curl mariadb-server-106 && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash && \
    source ~/.bashrc && \
    nvm install --lts && \
    git clone https://github.com/AinoMegumi/CharacterManagementSystem.git /usr/local/cmsystem/ && \
    cd /usr/local/cmsystem/ && \
    rm -rf ./tests/ .* && \
    npm install

