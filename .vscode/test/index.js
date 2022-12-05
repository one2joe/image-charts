const axios = require('axios')

async function main () {
	try {
		// await axios({ method: 'get', url: 'https://nongoffice.com/api/calculateEnneagramScore' }).then(async function (response) {
		// await axios({ method: 'get', url: 'http://localhost/export.up-green.com/api/nr2_chapter_traffic_light_this_month?Region_ID=13114' }).then(async function (response) {
		// await axios({ method: 'get', url: 'http://localhost/export.up-green.com/api/nr2_chapter_traffic_light?Region_ID=13114' }).then(async function (response) {
		// await axios({ method: 'get', url: 'http://localhost/nongoffice.com/api/query' }).then(async function (response) {
		// await axios({ method: 'get', url: 'http://localhost/nongoffice.com/api/getLastMonthMTLSQL' }).then(async function (response) {
		// await axios({
		// 	method: 'post', 
		// 	url: 'http://localhost/api.up-green.com/api/webhook',
		// 	data: JSON.parse('{"destination":"U99bb4b0767f803bd24397546c0699a78","events":[{"type":"message","message":{"type":"text","id":"16863797853147","text":"test"},"webhookEventId":"01GE3F8BQR9F01FPARRJ3MHNNE","deliveryContext":{"isRedelivery":false},"timestamp":1664416493009,"source":{"type":"user","userId":"U5f9f1ef6832fce8a52beea916f94b3d2"},"replyToken":"bc88e7b160d041a89c44172abb5f9bc2","mode":"active"}]}')
		// }).then(async function (response) {
		await axios({
			
			// method: 'post',
			// url: 'http://localhost/api.up-green.com/api/addVisitor',
			/* data: {
				action: "addVisitor",
				Country_ID: "3979",
				Region_ID: "13114",
				Chapter_ID: "15018",
				namesur: "eyJuYW1lIjoiY211bWFkIiwic3VyIjoidGVzdC0yMDExIn0=",
				Visitor_ID: "6373",
				First_Name: "สมศักดิ์",
				First_Name_Existing: "Wichanya",
				Last_Name: "สมส่วน",
				Last_Name_Existing: "Kaninwiwatkul",
				Company_Name: "Z Axis",
				Profession: "กรรมกร",
				Email_Address: "cmumad@gmail.com",
				Phone_Number: "0899999159",
				node: undefined,
				name: "cmumad",
				correct: true,
				success: true,
				is_member: true,
				error: "",
				result: "Successfully edited visitor registration.",
				Visitor_ID_Real: "7061977",
			}, */
			/* data: {
				action: "addVisitor",
				Country_ID: "3979",
				Region_ID: "13114",
				Chapter_ID: "15018",
				namesur: "eyJuYW1lIjoiY211bWFkIiwic3VyIjoidGVzdC0yMDExIn0=",
				Visitor_ID: "6376",
				First_Name: "สมศักดิ์",
				Last_Name: "สมส่วน",
				Company_Name: "Z Axis",
				Profession: "กรรมกร",
				Email_Address: "cmumad@gmail.com",
				Phone_Number: "0899999159",
				node: undefined,
				name: "cmumad",
				correct: true,
				success: true,
				is_member: true,
				error: "",
				result: "There was an error adding the registration",
			}, */

			// url: 'http://localhost/api.up-green.com/api/getDraftVisitor',
			// url: 'https://api.up-green.com/api/getDraftVisitor',

			/* url: 'http://localhost/api.up-green.com/api/webhook',
			data: {
				destination:"U99bb4b0767f803bd24397546c0699a78",
				events:[{
					type:"message",
					message:{
						type:"text",
						id:"16863797853147",
						// text:"1425886"
						// text:"1291350"
						// text:"please reset line user id"
						// text:"รายชื่อทีม"
						// text:"การมีส่วนร่วมทีม152"

						// (152) -New Member-
						// (151) Construction
						// (277) i - Smart
						// (276) Phoenix Warehouse Solution
						// (501) SuperTeam (Elte+HR+Garment)
						// (148) The Matrix Marketing

						// text:"การมีส่วนร่วมทีม Phoenix Warehouse Solution"
						text:"การมีส่วนร่วมทีม 152"
					},
					webhookEventId:"01GE3F8BQR9F01FPARRJ3MHNNE",
					deliveryContext:{isRedelivery:false},
					timestamp:1664416493009,
					source:{
						type:"user",
						userId:"U5f9f1ef6832fce8a52beea916f94b3d2"
					},
					replyToken:"bc88e7b160d041a89c44172abb5f9bc2",
					mode:"active"
				}]
			}, */
			// data: JSON.parse('{"destination":"U99bb4b0767f803bd24397546c0699a78","events":[{"type":"message","message":{"type":"text","id":"16863797853147","text":"รายชื่อทีม"},"webhookEventId":"01GE3F8BQR9F01FPARRJ3MHNNE","deliveryContext":{"isRedelivery":false},"timestamp":1664416493009,"source":{"type":"user","userId":"U5f9f1ef6832fce8a52beea916f94b3d2"},"replyToken":"bc88e7b160d041a89c44172abb5f9bc2","mode":"active"}]}'),
			// data: JSON.parse('{"destination":"U99bb4b0767f803bd24397546c0699a78","events":[{"type":"message","message":{"type":"text","id":"16863797853147","text":"1425886"},"webhookEventId":"01GE3F8BQR9F01FPARRJ3MHNNE","deliveryContext":{"isRedelivery":false},"timestamp":1664416493009,"source":{"type":"user","userId":"U5f9f1ef6832fce8a52beea916f94b3d2"},"replyToken":"bc88e7b160d041a89c44172abb5f9bc2","mode":"active"}]}'),

			// url: 'http://localhost/api.up-green.com/api/responseText',
			// data: JSON.parse('{"destination":"U99bb4b0767f803bd24397546c0699a78","events":[{"type":"message","message":{"type":"text","id":"16863797853147","text":"1234567"},"webhookEventId":"01GE3F8BQR9F01FPARRJ3MHNNE","deliveryContext":{"isRedelivery":false},"timestamp":1664416493009,"source":{"type":"user","userId":"U5f9f1ef6832fce8a52beea916f94b3d2"},"replyToken":"bc88e7b160d041a89c44172abb5f9bc2","mode":"active"}]}'),

			// url: 'http://localhost/api.up-green.com/api/nlpName',
			// data: ['NUT สุภกิต'],

			method: 'get',
			url: 'http://localhost/image-charts/',
			// url: 'http://localhost/api.up-green.com/api/logIn',
			// url: 'http://localhost/api.up-green.com/api/checkLogIn',
			// url: 'http://localhost/api.up-green.com/api/notify_member_traffic_light_by_score?Chapter_ID=15018&string=1',
			// url: 'http://localhost/api.up-green.com/api/notify_member_traffic_light_by_score?Chapter_ID=15018',
			// url: 'http://localhost/api.up-green.com/api/notify_member_goal_progress_by_percent?Chapter_ID=15018&string=1',
			// url: 'http://localhost/api.up-green.com/api/notify_member_goal_progress_by_percent?Chapter_ID=15018',
			// url: 'http://localhost/api.up-green.com/api/notify_visitor/7069803',
		}).then(async function (response) {
		// await axios({ method: 'get', url: 'http://localhost/export.up-green.com/api/getIncomingRenewal' }).then(async function (response) {
		if (typeof response.data == 'object')
			console.log(JSON.stringify(response.data, null, 2))
		else 
			console.log(response.data)
	  }).catch(function (error) {
		  throw error
	  })
	} catch (err) {
		console.log(err)
	}
}

main()