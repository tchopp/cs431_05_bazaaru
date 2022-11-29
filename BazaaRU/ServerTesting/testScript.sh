#ENDPOINT TESTING FOR BAZAARU

#LOGIN, 2 TESTS
echo "Test for login, expecting true login"
curl -X POST -d '{"uName":"ac1","pWord":"pi"}' -H 'Content-Type: application/json' http://cs431-05.cs.rutgers.edu:5000/login
echo " "
printf "\n"
echo "Test for login, expecting false login"
curl -X POST -d '{"uName":"ac1","pWord":"pi1"}' -H 'Content-Type: application/json' http://cs431-05.cs.rutgers.edu:5000/login
echo " "
printf "\n"

#ACCOUNT LIST, 1 TEST
echo "Test for account list, expecting all accounts"
curl -v http://cs431-05.cs.rutgers.edu:5000/accountList
echo " "
printf "\n"

#ACCOUNT SEARCHING, 2 TESTS
echo "Test for account searching, expecting accounts containing 'a'"
curl -v http://cs431-05.cs.rutgers.edu:5000/ACresults/a
echo " "
printf "\n"
echo "Test for account searching, expecting no accounts"
curl -v http://cs431-05.cs.rutgers.edu:5000/ACresults/X
echo " "
printf "\n"

#POST SEARCHING, 2 TESTS
echo "Test for post searching, expecting all potatos"	#might return other stuff idk
curl -v http://cs431-05.cs.rutgers.edu:5000/results/pot
echo " "
printf "\n"
echo "Test for post searching, expecting nothing"	#needs to be changed, can return if post containing 8 exists
curl -v http://cs431-05.cs.rutgers.edu:5000/results/8
echo " "
printf "\n"

#CATALOG, 1 TEST
echo "Test for catalog, should return catalog in post_id desc order"
curl -X POST http://localhost:5000/catalog -d {username:'ac1'}
echo " "
printf "\n"

#CHECK FOR PURCHASE, 1 TEST
echo "Test for check for purchase, expecting false"
curl -X POST -d '{"reviewer":"ac1","reviewee":"ss22"}' -H 'Content-Type application/json' http://cs431-05.cs.rutgers.edu:5000/check_for_purchase
echo " "
printf "\n"

#CATALOG WEEKLY POST, 1 TEST
echo "Test for weekly catalog posts, expecting posts from the week not made by ac1"
curl -X POST http://localhost:5000/catalogweek -d {username:'ac1'}
echo " "
printf "\n"

#COMPLAINT LIST, 1 TEST
echo "Test for complaint list, should return all complaints from db"
curl -v http://cs431-05.cs.rutgers.edu:5000/complaintList
echo " "
printf "\n"

#TRANSACTION TEST, 1 TEST
echo "Test for transaction list, should return all transaction involving account ac1"
curl -X POST -d '{"uName":"ac1"}' -H 'Content-Type: application/json' http://cs431-05.cs.rutgers.edu:5000/getTransactions
echo " "
printf "\n"

#ADD POST TEST, 1 TEST
echo "Test for creating a new post, should return success"
curl -X POST -d '{"postTitle":"baaazaaaruuu","postDescription":"default","postPrice":"1","postType":"Accessories","postUserID":"1"}' -H 'Content-Type: application/json' http://cs431-05.cs.rutgers.edu:5000/createPost
echo " "
printf "\n"
