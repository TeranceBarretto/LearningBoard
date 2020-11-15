#!/bin/sh
curl  -H "Content-Type: application/json" -d "{\"username\":\"gilford\",\"password\":\"fernandes\"}" http://localhost:8082/register/student
user=$(curl -d "{\"username\":\"gilford\",\"password\":\"fernandes\"}" -H "Content-Type: application/json" http://localhost:8082/authenticate)
accessToken=$(awk  'BEGIN{FS="\""}{print $4}' <<< "${user}")
curl  -H "Content-Type: application/json" -H "Authorization: Bearer ${accessToken}" -d "{\"name\":\"Maths\",\"schedules\":[{\"day\": \"TUESDAY\",\"startTime\":\"08:00\",\"endTime\":\"09:00\"},{\"day\": \"FRIDAY\",\"startTime\":\"10:00\",\"endTime\":\"11:00\"}]}" http://localhost:8082/create/course
curl  -H "Content-Type: application/json" -H "Authorization: Bearer ${accessToken}" -d "[1]" http://localhost:8082/register/students/course/1
$SHELL