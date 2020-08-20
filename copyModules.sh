#!/usr/bin/env bash
#ensure new modules are pulled in
git pull
#copy to magicmirror dir on RasPi
cp ./modules/* ~/magicmirror/mounts/modules/
