# /login
ユーザ認証を行います

## GET 

+ Response 201 (application/json)
	{
		"status": "ok",
	}


# /register
ユーザ登録を行います

## POST

+ Request (application/json)
	{
		"username": "hoge",
		"password": "fuga",
	}

+ Response (application/json)
	{
		"status": "ok",
	}


# /users
ユーザの一覧を取得します

## GET

+ Response 200 (application/json)
	[
		{
			"username": "user0",
				"password": "hhdagffaij",
				"email": "user0@example.com"
		},
		{
			"username": "user1",
			"password": "fjdcdddhgc",
			"email": "user1@example.com"
		},
		{
			"username": "user2",
			"password": "ejdhgfjecd",
			"email": "user2@example.com"
		},
		{
			"username": "user3",
			"password": "bicjbiceaa",
			"email": "user3@example.com"
		},
		{
			"username": "user4",
			"password": "iffifibdff",
			"email": "user4@example.com"
		},
		{
			"username": "user5",
			"password": "cdfjaabgfg",
			"email": "user5@example.com"
		},
		{
			"username": "user6",
			"password": "jbbhegicbc",
			"email": "user6@example.com"
		},
		{
			"username": "user7",
			"password": "ejagidfdaa",
			"email": "user7@example.com"
		},
		{
			"username": "user8",
			"password": "ibgeahbgfd",
			"email": "user8@example.com"
		},
		{
			"username": "user9",
			"password": "eefjegaije",
			"email": "user9@example.com"
		}
	]


