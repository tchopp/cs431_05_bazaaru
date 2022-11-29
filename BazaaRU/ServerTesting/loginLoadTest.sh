#Login load test
echo "Test for login, expecting true login"
curl -X POST -d '{"uName":"ac1","pWord":"pi"}' -H 'Content-Type: application/json' http://cs431-05.cs.rutgers.edu:5000/login
echo " "
printf "\n"
