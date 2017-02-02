const express = require("express");
const router = express.Router();


router
	.get("/", (req, res) => {
		res.send(users);
		res.send("ok");
	})
	.get("/:id", (req,res) => {
		const { id } = req.params;
		const user = users.find(user => user.id == id);

		if (user) {
			res.send(user);
		} else {
			res.status(404).send(`User ${id} doesn't exist`);
		}
	})
	.delete("/:id", (req, res) => {
		const { id } = req.params;
		const index = users.findIndex(user => user.id == id);

		if (index > -1) {
			users.splice(index, 1);
			res.sendStatus(200);
		} else {
			res.status(404).send(`User ${id} doesn't exist`);
		}
	})
;

module.exports = router;

let users = [{
  "id": 1,
  "first_name": "Susan",
  "last_name": "Fisher",
  "email": "sfisher0@blogtalkradio.com",
  "gender": "Female",
  "ip_address": "98.173.49.46"
}, {
  "id": 2,
  "first_name": "Donna",
  "last_name": "Lynch",
  "email": "dlynch1@123-reg.co.uk",
  "gender": "Female",
  "ip_address": "44.94.179.127"
}, {
  "id": 3,
  "first_name": "Ronald",
  "last_name": "Garcia",
  "email": "rgarcia2@geocities.jp",
  "gender": "Male",
  "ip_address": "254.93.109.40"
}, {
  "id": 4,
  "first_name": "Brian",
  "last_name": "Peters",
  "email": "bpeters3@deviantart.com",
  "gender": "Male",
  "ip_address": "109.204.43.158"
}, {
  "id": 5,
  "first_name": "Ann",
  "last_name": "Crawford",
  "email": "acrawford4@purevolume.com",
  "gender": "Female",
  "ip_address": "252.232.141.56"
}, {
  "id": 6,
  "first_name": "Barbara",
  "last_name": "Garza",
  "email": "bgarza5@bloglovin.com",
  "gender": "Female",
  "ip_address": "255.195.73.112"
}, {
  "id": 7,
  "first_name": "Carl",
  "last_name": "Gardner",
  "email": "cgardner6@theguardian.com",
  "gender": "Male",
  "ip_address": "21.52.144.85"
}, {
  "id": 8,
  "first_name": "Rose",
  "last_name": "Freeman",
  "email": "rfreeman7@sbwire.com",
  "gender": "Female",
  "ip_address": "115.216.133.162"
}, {
  "id": 9,
  "first_name": "Carol",
  "last_name": "Young",
  "email": "cyoung8@yelp.com",
  "gender": "Female",
  "ip_address": "21.93.103.217"
}, {
  "id": 10,
  "first_name": "Robin",
  "last_name": "Little",
  "email": "rlittle9@t.co",
  "gender": "Female",
  "ip_address": "234.115.110.15"
}, {
  "id": 11,
  "first_name": "Sean",
  "last_name": "Davis",
  "email": "sdavisa@barnesandnoble.com",
  "gender": "Male",
  "ip_address": "177.100.156.69"
}, {
  "id": 12,
  "first_name": "Kevin",
  "last_name": "Gray",
  "email": "kgrayb@hud.gov",
  "gender": "Male",
  "ip_address": "16.70.241.30"
}, {
  "id": 13,
  "first_name": "Lori",
  "last_name": "Hanson",
  "email": "lhansonc@google.cn",
  "gender": "Female",
  "ip_address": "13.76.133.227"
}, {
  "id": 14,
  "first_name": "Andrea",
  "last_name": "Fox",
  "email": "afoxd@ihg.com",
  "gender": "Female",
  "ip_address": "41.205.17.73"
}, {
  "id": 15,
  "first_name": "Shirley",
  "last_name": "Morrison",
  "email": "smorrisone@dion.ne.jp",
  "gender": "Female",
  "ip_address": "149.46.192.100"
}, {
  "id": 16,
  "first_name": "Denise",
  "last_name": "Snyder",
  "email": "dsnyderf@paypal.com",
  "gender": "Female",
  "ip_address": "210.14.124.169"
}, {
  "id": 17,
  "first_name": "Jane",
  "last_name": "Powell",
  "email": "jpowellg@macromedia.com",
  "gender": "Female",
  "ip_address": "185.216.166.0"
}, {
  "id": 18,
  "first_name": "Kimberly",
  "last_name": "Dixon",
  "email": "kdixonh@pinterest.com",
  "gender": "Female",
  "ip_address": "164.160.248.103"
}, {
  "id": 19,
  "first_name": "Frances",
  "last_name": "Little",
  "email": "flittlei@pen.io",
  "gender": "Female",
  "ip_address": "1.23.185.145"
}, {
  "id": 20,
  "first_name": "Jimmy",
  "last_name": "Wilson",
  "email": "jwilsonj@newyorker.com",
  "gender": "Male",
  "ip_address": "143.76.133.129"
}]
