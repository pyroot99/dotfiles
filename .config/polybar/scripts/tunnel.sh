#!/bin/bash


ip=`ifconfig | grep -n1 tun0 | grep inet | awk '{print $3}'`
if [[ -z $ip  ]]
then
	echo ""

else
	echo $ip
fi
