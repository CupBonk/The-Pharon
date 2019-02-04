window.onHBLoaded = function () {
var spaceBall = `{
	

	"name" : "HaxCups.cc SpaceBall",

	"width" : 900,

	"height" : 540,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 0, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -550, "y" : 240, "trait" : "ball_area1" },
		/* 1 */ { "x" : -550, "y" : 80, "bCoef" : 0, "trait" : "ball_area1" },
		/* 2 */ { "x" : -550, "y" : -80, "bCoef" : 0, "trait" : "ball_area1" },
		/* 3 */ { "x" : -550, "y" : -240, "trait" : "ball_area1" },
		/* 4 */ { "x" : 550, "y" : 240, "trait" : "ball_area1" },
		/* 5 */ { "x" : 550, "y" : 80, "bCoef" : 0, "trait" : "ball_area1" },
		/* 6 */ { "x" : 550, "y" : -80, "bCoef" : 0, "trait" : "ball_area1" },
		/* 7 */ { "x" : 550, "y" : -240, "trait" : "ball_area1" },
		
		/* 8 */ { "x" : 0, "y" : 540, "trait" : "kick_off_invisible" },
		
		/* 9 */ { "x" : 0, "y" : 80, "trait" : "kick_off_visible" },
		/* 10 */ { "x" : 0, "y" : -80, "trait" : "kick_off_visible" },
		
		/* 11 */ { "x" : 0, "y" : -540, "trait" : "kick_off_invisible" },
		
		/* 12 */ { "x" : -576, "y" : -60, "bCoef" : 0, "trait" : "goal_net" },
		/* 13 */ { "x" : -576, "y" : 60, "bCoef" : 0, "trait" : "goal_net" },
		/* 14 */ { "x" : 576, "y" : -60, "bCoef" : 0, "trait" : "goal_net" },
		/* 15 */ { "x" : 576, "y" : 60, "bCoef" : 0, "trait" : "goal_net" },
		
		/* 16 */ { "x" : 0, "y" : 240, "trait" : "coverup" },
		/* 17 */ { "x" : 0, "y" : -240, "trait" : "coverup" },
		
		/* 18 */ { "x" : 0, "y" : 80, "trait" : "kick_off_visible" },
		/* 19 */ { "x" : 0, "y" : -80, "trait" : "kick_off_visible" },
		
		/* 20 */ { "x" : -53, "y" : 211, "trait" : "coverup", "color" : "b0c0d0" },
		/* 21 */ { "x" : -53, "y" : 225.2, "trait" : "coverup", "color" : "b0c0d0" },
		/* 22 */ { "x" : -52.5, "y" : 218.5, "trait" : "coverup", "color" : "b0c0d0" },
		/* 23 */ { "x" : -42.5, "y" : 218.5, "trait" : "coverup", "color" : "b0c0d0" },
		/* 24 */ { "x" : -42, "y" : 225.2, "trait" : "coverup", "color" : "b0c0d0" },
		/* 25 */ { "x" : -42, "y" : 211, "trait" : "coverup", "color" : "b0c0d0" },
		/* 26 */ { "x" : -23.5, "y" : 225.2, "trait" : "coverup" },
		/* 27 */ { "x" : -23.5, "y" : 217, "trait" : "coverup", "curve" : -180 },
		/* 28 */ { "x" : -34.5, "y" : 217, "trait" : "coverup", "curve" : -180 },
		/* 29 */ { "x" : -34.5, "y" : 225.2, "trait" : "coverup" },
		/* 30 */ { "x" : -34, "y" : 220, "trait" : "coverup", "curve" : 180 },
		/* 31 */ { "x" : -24, "y" : 220, "trait" : "coverup", "curve" : 180 },
		/* 32 */ { "x" : 15, "y" : 212, "trait" : "coverup", "curve" : 210 },
		/* 33 */ { "x" : 15, "y" : 225, "trait" : "coverup", "curve" : 210 },
		/* 34 */ { "x" : 17.3, "y" : 225, "trait" : "coverup" },
		/* 35 */ { "x" : 17.3, "y" : 212, "trait" : "coverup" },
		/* 36 */ { "x" : 23, "y" : 211.8, "trait" : "coverup" },
		/* 37 */ { "x" : 23, "y" : 220, "trait" : "coverup", "curve" : -90 },
		/* 38 */ { "x" : 26, "y" : 225, "trait" : "coverup", "curve" : -90 },
		/* 39 */ { "x" : 29, "y" : 225, "trait" : "coverup", "curve" : -90 },
		/* 40 */ { "x" : 33, "y" : 220, "trait" : "coverup", "curve" : -90 },
		/* 41 */ { "x" : 33, "y" : 211.8, "trait" : "coverup" },
		/* 42 */ { "x" : 39, "y" : 212, "trait" : "coverup" },
		/* 43 */ { "x" : 39, "y" : 225.2, "trait" : "coverup" },
		/* 44 */ { "x" : 45, "y" : 212, "trait" : "coverup", "curve" : 180 },
		/* 45 */ { "x" : 45, "y" : 220, "trait" : "coverup", "curve" : 180 },
		/* 46 */ { "x" : 39.5, "y" : 220, "trait" : "coverup" },
		/* 47 */ { "x" : -17, "y" : 212, "trait" : "coverup" },
		/* 48 */ { "x" : -6, "y" : 225, "trait" : "coverup" },
		/* 49 */ { "x" : -6, "y" : 212, "trait" : "coverup" },
		/* 50 */ { "x" : -17, "y" : 225, "trait" : "coverup" },
		/* 51 */ { "x" : 87.5, "y" : 212, "trait" : "coverup", "curve" : -210, "color" : "333333" },
		/* 52 */ { "x" : 87.5, "y" : 225, "trait" : "coverup", "curve" : -210, "color" : "333333" },
		/* 53 */ { "x" : 73.5, "y" : 225, "trait" : "coverup", "curve" : -180, "color" : "333333" },
		/* 54 */ { "x" : 73.5, "y" : 223, "trait" : "coverup", "curve" : -180, "color" : "333333" },
		/* 55 */ { "x" : 89.8, "y" : 225, "trait" : "coverup", "color" : "333333" },
		/* 56 */ { "x" : 89.8, "y" : 212, "trait" : "coverup", "color" : "333333" },
		/* 57 */ { "x" : 58, "y" : 218.5, "trait" : "coverup", "curve" : 180 },
		/* 58 */ { "x" : 64, "y" : 218.5, "trait" : "coverup", "curve" : 180 },
		/* 59 */ { "x" : 64, "y" : 225, "trait" : "coverup", "curve" : -40 },
		/* 60 */ { "x" : 58, "y" : 212, "trait" : "coverup", "curve" : -40 },
		/* 61 */ { "x" : 54.5, "y" : 225, "trait" : "coverup" },
		/* 62 */ { "x" : 67.5, "y" : 212, "trait" : "coverup" },
		/* 63 */ { "x" : 101.5, "y" : 212, "trait" : "coverup", "curve" : -210, "color" : "333333" },
		/* 64 */ { "x" : 101.5, "y" : 225, "trait" : "coverup", "curve" : -210, "color" : "333333" },
		/* 65 */ { "x" : 104.8, "y" : 225, "trait" : "coverup", "color" : "333333" },
		/* 66 */ { "x" : 104.8, "y" : 212, "trait" : "coverup", "color" : "333333" }

	],

	"segments" : [
		{ "v0" : 17, "v1" : 19, "color" : "ccccff", "trait" : "coverup" },
		{ "v0" : 19, "v1" : 18, "color" : "6b6b6b", "trait" : "coverup" },
		{ "v0" : 18, "v1" : 16, "color" : "ccccff", "trait" : "coverup" },
		{ "v0" : 1, "v1" : 2, "color" : "d0d0e8", "trait" : "coverup" },
		{ "v0" : 5, "v1" : 6, "color" : "d0d0e8", "trait" : "coverup" },
		
		{ "v0" : 8, "v1" : 9, "trait" : "kick_off_invisible" },
		
		{ "v0" : 9, "v1" : 10, "curve" : 180, "color" : "b2c8dB", "cGroup" : ["blueKO" ], "trait" : "kick_off_visible" },
		{ "v0" : 9, "v1" : 10, "curve" : -180, "color" : "c8c8e0", "cGroup" : ["redKO" ], "trait" : "kick_off_visible" },
		{ "v0" : 18, "v1" : 19, "curve" : 180, "color" : "c8c8e0", "cGroup" : ["blueKO" ], "trait" : "kick_off_visible" },
		
		{ "v0" : 10, "v1" : 11, "trait" : "kick_off_invisible" },
		
		{ "v0" : 0, "v1" : 1, "color" : "d0d0e8", "trait" : "ball_area1" },
		{ "v0" : 2, "v1" : 3, "color" : "d0d0e8", "trait" : "ball_area1" },
		{ "v0" : 4, "v1" : 5, "color" : "d0d0e8", "trait" : "ball_area1" },
		{ "v0" : 6, "v1" : 7, "color" : "d0d0e8", "trait" : "ball_area1" },
		{ "v0" : 0, "v1" : 4, "color" : "d0d0e8", "trait" : "ball_area1" },
		{ "v0" : 3, "v1" : 7, "color" : "d0d0e8", "trait" : "ball_area1" },
		
		{ "v0" : 12, "v1" : 13, "color" : "d0d0e8", "bCoef" : 0, "trait" : "goal_net" },
		{ "v0" : 14, "v1" : 15, "color" : "d0d0e8", "bCoef" : 0, "trait" : "goal_net" },
		{ "v0" : 13, "v1" : 1, "curve" : -90, "color" : "d0d0e8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "goal_net" },
		{ "v0" : 2, "v1" : 12, "curve" : -90, "color" : "d0d0e8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "goal_net" },
		{ "v0" : 15, "v1" : 5, "curve" : 90, "color" : "d0d0e8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "goal_net" },
		{ "v0" : 6, "v1" : 14, "curve" : 90, "color" : "d0d0e8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "goal_net" },
		
		{ "v0" : 20, "v1" : 21, "color" : "b0c0d0", "trait" : "coverup", "x" : -51 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 218.5 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : -40 },
		{ "v0" : 26, "v1" : 27, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : -23 },
		{ "v0" : 27, "v1" : 28, "curve" : -180, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 217 },
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : -91 },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 219 },
		{ "v0" : 33, "v1" : 34, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup" },
		{ "v0" : 32, "v1" : 35, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 212 },
		{ "v0" : 36, "v1" : 37, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : 23 },
		{ "v0" : 37, "v1" : 38, "curve" : -90, "vis" : true, "color" : "b0c0d0", "trait" : "coverup" },
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 225 },
		{ "v0" : 39, "v1" : 40, "curve" : -90, "vis" : true, "color" : "b0c0d0", "trait" : "coverup" },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : 33 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : 39 },
		{ "v0" : 42, "v1" : 44, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 212 },
		{ "v0" : 44, "v1" : 45, "curve" : 180, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : 45 },
		{ "v0" : 45, "v1" : 46, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 220 },
		{ "v0" : 47, "v1" : 48, "vis" : true, "color" : "b0c0d0", "trait" : "coverup" },
		{ "v0" : 49, "v1" : 50, "vis" : true, "color" : "b0c0d0", "trait" : "coverup" },
		{ "v0" : 51, "v1" : 52, "curve" : -210, "vis" : true, "color" : "333333", "trait" : "coverup", "x" : 87.5 },
		{ "v0" : 53, "v1" : 54, "curve" : -180, "vis" : true, "color" : "333333", "trait" : "coverup", "x" : 73.5 },
		{ "v0" : 52, "v1" : 55, "vis" : true, "color" : "333333", "trait" : "coverup", "y" : 225 },
		{ "v0" : 51, "v1" : 56, "vis" : true, "color" : "333333", "trait" : "coverup", "y" : 212 },
		{ "v0" : 54, "v1" : 53, "curve" : -180, "vis" : true, "color" : "333333", "trait" : "coverup", "x" : 73.5 },
		{ "v0" : 57, "v1" : 58, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 218.5 },
		{ "v0" : 57, "v1" : 60, "curve" : 180, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : 58.5 },
		{ "v0" : 58, "v1" : 59, "curve" : 180, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : 64 },
		{ "v0" : 33, "v1" : 32, "curve" : 210, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "x" : 15 },
		{ "v0" : 59, "v1" : 61, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 225 },
		{ "v0" : 60, "v1" : 62, "curve" : 0, "vis" : true, "color" : "b0c0d0", "trait" : "coverup", "y" : 212 },
		{ "v0" : 63, "v1" : 64, "curve" : -210, "vis" : true, "color" : "333333", "trait" : "coverup", "x" : 87.5 },
		{ "v0" : 64, "v1" : 65, "vis" : true, "color" : "333333", "trait" : "coverup", "y" : 225 },
		{ "v0" : 63, "v1" : 66, "vis" : true, "color" : "333333", "trait" : "coverup", "y" : 212 }

	],

	"goals" : [
		{ "p0" : [-550,80 ], "p1" : [-550,-80 ], "team" : "red" },
		{ "p0" : [550,80 ], "p1" : [550,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "pos" : [-550,80 ], "color" : "961515", "trait" : "goal_post" },
		{ "pos" : [-550,-80 ], "color" : "961515", "trait" : "goal_post" },
		{ "pos" : [550,80 ], "color" : "1E1666", "trait" : "goal_post" },
		{ "pos" : [550,-80 ], "color" : "1E1666", "trait" : "goal_post" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -540, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -540, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -900, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -900, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -247, "trait" : "ball_area1" },
		{ "normal" : [0,-1 ], "dist" : -247, "trait" : "ball_area1" },
		{ "normal" : [0.9,0.1 ], "dist" : -582, "bCoef" : 1, "trait" : "ball_area1" },
		{ "normal" : [0.9,-0.1 ], "dist" : -582, "bCoef" : 1, "trait" : "ball_area1" },
		{ "normal" : [-0.9,0.1 ], "dist" : -582, "bCoef" : 1, "trait" : "ball_area1" },
		{ "normal" : [-0.9,-0.1 ], "dist" : -582, "bCoef" : 1, "trait" : "ball_area1" }

	],

	"traits" : {
		"ball_area1" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball" ], "color" : "000000" },
		"ball_area2" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"ball_area3" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goal_post" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5, "color" : "a300da" },
		"goal_net" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ], "color" : "000000" },
		"kick_off_visible" : { "vis" : true, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ], "color" : "606060" },
		"kick_off_invisible" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"coverup" : { "vis" : true, "color" : "808080", "cMask" : ["" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.9995,
		"acceleration" : 0.025,
		"kickingAcceleration" : 0.0175,
		"kickingDamping" : 0.9995,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 10,
		"bCoef" : 0.5,
		"invMass" : 1,
		"damping" : 0.99,
		"color" : "FFFFFF",
		"cMask" : [ "all"
		],
		"cGroup" : [ "ball"
		]

	}
}`

	var m7md =
	`{
	"name":"m7md from HaxMaps","width":1700,"height":850,"spawnDistance":350,"bg":{"type":"hockey","width":1100,"height":480,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-1101,"y":241,"trait":"ballArea"},{"x":-1101,"y":95,"trait":"ballArea"},{"x":-1099,"y":-479,"trait":"ballArea"},{"x":1100,"y":477,"trait":"ballArea"},{"x":1100,"y":99,"trait":"ballArea"},{"x":1100,"y":97,"trait":"ballArea"},{"x":1101,"y":-479,"trait":"ballArea"},{"x":-1,"y":478,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":1,"y":-479,"trait":"kickOffBarrier"},{"x":-1111,"y":-101,"trait":"goalNet"},{"x":-1131,"y":-81,"trait":"goalNet"},{"x":-1131,"y":79,"trait":"goalNet"},{"x":-1111,"y":99,"trait":"goalNet"},{"x":1111,"y":-103,"trait":"goalNet"},{"x":1131,"y":-83,"trait":"goalNet"},{"x":1130,"y":80,"trait":"goalNet"},{"x":1110,"y":100,"trait":"goalNet"},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-25,"y":-30},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":23.5548780488,"y":-47.3475609756},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-25.7926829268,"y":42.0304878049},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":27,"y":34},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-55,"y":-46},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-52,"y":46},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-24,"y":-67},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-22,"y":66},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":23,"y":-67},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":23,"y":66},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":70,"y":7},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-25,"y":-30},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":1.55487804878,"y":-0.34756097561},{"x":-1098,"y":478,"trait":"ballArea"},{"x":1100,"y":481,"trait":"ballArea"},{"x":1099,"y":-100.111114502,"trait":"ballArea"},{"x":1100,"y":-478.111114502,"trait":"ballArea"},{"x":-1101,"y":478,"trait":"ballArea"},{"x":-1100,"y":93,"trait":"ballArea"},{"x":-1099,"y":-95,"trait":"ballArea","cMask":["wall"],"cGroup":["wall"]},{"x":-1099,"y":-477,"trait":"ballArea"},{"bCoef":0.5,"trait":"goalPost","x":1099.66674805,"y":-99.6562194824,"cMask":["wall"],"cGroup":["wall"]},{"bCoef":0.5,"trait":"goalPost","x":1099.66674805,"y":102.343780518,"cMask":["wall"],"cGroup":["wall"]},{"bCoef":0.5,"trait":"goalPost","x":-1100.55554199,"y":102.343780518,"cMask":["wall"],"cGroup":["wall"]}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":3,"v1":4,"trait":"ballArea"},{"v0":11,"v1":12,"trait":"goalNet","curve":-90},{"v0":12,"v1":13,"trait":"goalNet"},{"v0":13,"v1":14,"trait":"goalNet","curve":-90},{"v0":15,"v1":16,"trait":"goalNet","curve":90},{"v0":16,"v1":17,"trait":"goalNet"},{"v0":17,"v1":18,"trait":"goalNet","curve":90},{"v0":7,"v1":8,"trait":"kickOffBarrier"},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier"},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":19,"v1":20,"curve":176.457653947},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":21,"v1":22,"curve":-167.038290228},{"curve":-76.584599319,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":23,"v1":24},{"curve":-67.773083012,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":25,"v1":26},{"curve":-56.9484072201,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":23,"v1":26},{"curve":62.9803920934,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":27,"v1":28},{"curve":-56.9484072201,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":28,"v1":29},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":30,"v1":31,"curve":-40.6693372455},{"curve":-40.6693372455,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":22,"v1":31},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":2,"v1":6},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":9,"v1":8},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":4,"v1":5},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":32,"v1":33},{"v0":34,"v1":35,"trait":"ballArea"},{"v0":36,"v1":37,"trait":"ballArea"},{"v0":38,"v1":39,"trait":"ballArea"},{"color":"2400F1","bCoef":0.5,"trait":"goalPost","v0":40,"v1":41,"cMask":["wall"],"cGroup":["wall"],"curve":0},{"color":"F10000","bCoef":0.5,"trait":"goalPost","v0":38,"v1":42,"cMask":["wall"],"cGroup":["wall"]}],"goals":[{"p0":[-1100,56],"p1":[-1100,-104],"team":"red"},{"p0":[1101,57],"p1":[1101,-103],"team":"blue"},{"p0":[-1100,102],"p1":[-1100,-58],"team":"red"},{"p0":[1098,105],"p1":[1098,-55],"team":"blue"}],"discs":[{"pos":[-1101,99],"trait":"goalPost","color":"F10000","cMask":["all"],"cGroup":["all"],"_selected":true},{"pos":[-1101,-101],"trait":"goalPost","color":"F10000"},{"pos":[1100,100],"trait":"goalPost","color":"2400F1"},{"pos":[1101,-103],"trait":"goalPost","color":"2400F1"}],"planes":[{"normal":[0,1],"dist":-480,"trait":"ballArea"},{"normal":[0,-1],"dist":-480,"trait":"ballArea"},{"normal":[0,1],"dist":-851,"bCoef":0.1},{"normal":[0,-1],"dist":-849,"bCoef":0.1},{"normal":[1,0],"dist":-1702,"bCoef":0.1},{"normal":[-1,0],"dist":-1700,"bCoef":0.1}],"traits":{"cornerflag":{"radius":3,"invMass":0,"bCoef":0.5,"color":"FFFF00","cGroup":[""]},"ballArea":{"vis":true,"bCoef":1,"cMask":["ball"],"color":"999999"},"haxspace":{"vis":true,"bCoef":1,"cMask":["ball"],"color":"999999"},"NSL":{"vis":true,"bCoef":1,"cMask":["wall"],"color":"999999"},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5,"color":"CCCCCC"},"goalNet":{"vis":false,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":true,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"],"color":"FFFFFF"}},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.9995,"acceleration":0.025,"kickingAcceleration":0.0175,"kickingDamping":0.9995,"kickStrength":5},"ballPhysics":{"radius":10,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"FFFFFF","cMask":["all"],"cGroup":["ball"]}
}`

	var nsl =
	`{"name":"NSL Big Spaceball v3 by haxspace_cf from HaxMaps","width":900,"height":540,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":-550,"y":240,"trait":"ballArea"},{"x":-550,"y":80,"trait":"ballArea"},{"x":-550,"y":-80,"trait":"ballArea"},{"x":-550,"y":-240,"trait":"ballArea"},{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":80,"trait":"ballArea"},{"x":550,"y":-80,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":240,"trait":"kickOffBarrier"},{"x":0,"y":80,"trait":"kickOffBarrier"},{"x":0,"y":-80,"trait":"kickOffBarrier"},{"x":0,"y":-240,"trait":"kickOffBarrier"},{"x":-560,"y":-80,"trait":"goalNet"},{"x":-580,"y":-60,"trait":"goalNet"},{"x":-580,"y":60,"trait":"goalNet"},{"x":-560,"y":80,"trait":"goalNet"},{"x":560,"y":-80,"trait":"goalNet"},{"x":580,"y":-60,"trait":"goalNet"},{"x":580,"y":60,"trait":"goalNet"},{"x":560,"y":80,"trait":"goalNet"},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-118.956834083,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-118.956834083,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-100.044665167,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-100.044665167,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-118.956834083,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-100.044665167,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-92.5793353323,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-81.6301849075,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-70.1833458271,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-89.0955147426,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-74.1648550725,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-63.2157046477,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-44.3035357321,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-63.7133933033,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-42.3127811094,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-26.3867441279,"y":-270.329710145},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-19.4191029485,"y":-287.251124438},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-36.3405172414,"y":-257.389805097},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-26.3867441279,"y":-270.329710145},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-10.9583958021,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-10.9583958021,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-10.4607071464,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-10.4607071464,"y":-265.850512244},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":5.96301849075,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":16.9121689155,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":28.359007996,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":9.44683908046,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":24.3774987506,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":35.3266491754,"y":-283.269615192},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":35.3266491754,"y":-262.366691654},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":53.7411294353,"y":-283.269615192},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":54.7365067466,"y":-262.366691654},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.704147926,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.704147926,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.704147926,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":80.6163168416,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.704147926,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":80.6163168416,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.704147926,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":80.6163168416,"y":-264.855134933},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":87.583958021,"y":-252.412918541,"curve":200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":90.0724012994,"y":-252.412918541,"curve":200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":109.979947526,"y":-274.808908046},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":109.979947526,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":118.938343328,"y":-252.412918541},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":118.938343328,"y":-280.283483258},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":129.389805097,"y":-289.739567716},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":115.454522739,"y":-274.808908046},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":129.389805097,"y":-274.808908046},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":87.583958021,"y":-252.412918541,"curve":-200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":90.0724012994,"y":-252.412918541,"curve":-200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-120.506603525,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-120.506603525,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-101.505603788,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-101.505603788,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-120.506603525,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-101.505603788,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-94.0052091555,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-83.0046303604,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-71.5040252565,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-90.5050249934,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-75.5042357274,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-64.5036569324,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-45.5026571955,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-65.0036832413,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-43.50255196,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-27.5017100763,"y":269.50765588},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-20.5013417522,"y":252.506761379},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-37.5022362536,"y":282.508339911},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-27.5017100763,"y":269.50765588},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-12.0008945014,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-12.0008945014,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-11.5008681926,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":-11.5008681926,"y":275.00789266},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":5,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":16.0005787951,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":27.501183899,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":8.50018416206,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":23.500973428,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":34.5015522231,"y":257.50697185},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":34.5015522231,"y":278.508076822},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":53.0025256511,"y":257.50697185},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":54.0025782689,"y":278.508076822},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.002946593,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.002946593,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.002946593,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":80.0039463299,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.002946593,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":80.0039463299,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":61.002946593,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":80.0039463299,"y":276.007945278},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":87.004314654,"y":288.508602999,"curve":200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":89.5044461984,"y":288.508602999,"curve":200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":109.505498553,"y":266.0074191},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":109.505498553,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":118.505972113,"y":288.508602999},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":118.505972113,"y":260.507129703},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":129.006524599,"y":251.006629834},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":115.005787951,"y":266.0074191},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":129.006524599,"y":266.0074191},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":87.004314654,"y":288.508602999,"curve":-200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":89.5044461984,"y":288.508602999,"curve":-200},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":844.5,"y":4377},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":795.5,"y":4734},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":914.5,"y":4104},{"bCoef":1,"cMask":["ball"],"trait":"haxspace","x":844.5,"y":4377},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-25,"y":-30},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":23.5548780488,"y":-47.3475609756},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-25.7926829268,"y":42.0304878049},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":27,"y":34},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-55,"y":-46},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-52,"y":46},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-24,"y":-67},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-22,"y":66},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":23,"y":-67},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":23,"y":66},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":70,"y":7},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":-25,"y":-30},{"bCoef":1,"cMask":["wall"],"trait":"NSL","x":1.55487804878,"y":-0.34756097561}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":20,"v1":21},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":22,"v1":23},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":24,"v1":25},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":26,"v1":27},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":27,"v1":28},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":29,"v1":30},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":31,"v1":32,"curve":-35.6621262016},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":33,"v1":34,"curve":-38.788985702},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":35,"v1":36,"curve":221.48464364},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":37,"v1":38,"curve":-239.963278738},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":39,"v1":40},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":41,"v1":42,"curve":219.378800891},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":43,"v1":44},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":44,"v1":45},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":46,"v1":47},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":48,"v1":49},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":48,"v1":50,"curve":165.749967302},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":49,"v1":51,"curve":-188.519172507},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":52,"v1":53},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":54,"v1":55},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":56,"v1":57},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":58,"v1":59},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":60,"v1":61,"curve":200},{"curve":-213.787460358,"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":62,"v1":63},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":64,"v1":65},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":65,"v1":66,"curve":106.534346671},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":67,"v1":68},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":69,"v1":70,"curve":-200},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":71,"v1":72},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":73,"v1":74},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":75,"v1":76},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":77,"v1":78},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":78,"v1":79},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":80,"v1":81},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":82,"v1":83,"curve":-35.6621262016},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":84,"v1":85,"curve":-38.788985702},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":86,"v1":87,"curve":221.48464364},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":88,"v1":89,"curve":-239.963278738},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":90,"v1":91},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":92,"v1":93,"curve":219.378800891},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":94,"v1":95},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":95,"v1":96},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":97,"v1":98},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":99,"v1":100},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":99,"v1":101,"curve":165.749967302},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":100,"v1":102,"curve":-188.519172507},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":103,"v1":104},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":105,"v1":106},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":107,"v1":108},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":109,"v1":110},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":111,"v1":112,"curve":200},{"curve":-213.787460358,"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":113,"v1":114},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":115,"v1":116},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":116,"v1":117,"curve":106.534346671},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":118,"v1":119},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":120,"v1":121,"curve":-200},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":122,"v1":123,"curve":185.825033164},{"vis":true,"bCoef":1,"cMask":["ball"],"trait":"haxspace","v0":124,"v1":125,"curve":-315.553311052},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":126,"v1":127,"curve":176.457653947},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":128,"v1":129,"curve":-167.038290228},{"curve":-76.584599319,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":130,"v1":131},{"curve":-67.773083012,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":132,"v1":133},{"curve":-56.9484072201,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":130,"v1":133},{"curve":62.9803920934,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":134,"v1":135},{"curve":-56.9484072201,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":135,"v1":136},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":137,"v1":138,"curve":-40.6693372455},{"curve":-40.6693372455,"vis":true,"bCoef":1,"cMask":["wall"],"trait":"NSL","v0":129,"v1":138},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":3,"v1":7},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":0,"v1":4},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":10,"v1":9},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":1,"v1":2},{"vis":true,"bCoef":1,"cMask":["wall"],"trait":"ballArea","v0":5,"v1":6}],"goals":[{"p0":[-550,80],"p1":[-550,-80],"team":"red"},{"p0":[550,80],"p1":[550,-80],"team":"blue"}],"discs":[{"pos":[-550,80],"trait":"goalPost"},{"pos":[-550,-80],"trait":"goalPost"},{"pos":[550,80],"trait":"goalPost"},{"pos":[550,-80],"trait":"goalPost"}],"planes":[{"normal":[0,1],"dist":-240,"trait":"ballArea"},{"normal":[0,-1],"dist":-240,"trait":"ballArea"},{"normal":[0,1],"dist":-540,"bCoef":0.1},{"normal":[0,-1],"dist":-540,"bCoef":0.1},{"normal":[1,0],"dist":-900,"bCoef":0.1},{"normal":[-1,0],"dist":-900,"bCoef":0.1}],"traits":{"cornerflag":{"radius":3,"invMass":0,"bCoef":0.5,"color":"FFFF00","cGroup":[""]},"ballArea":{"vis":true,"bCoef":1,"cMask":["ball"],"color":"999999"},"haxspace":{"vis":true,"bCoef":1,"cMask":["ball"],"color":"999999"},"NSL":{"vis":true,"bCoef":1,"cMask":["wall"],"color":"999999"},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5,"color":"CCCCCC"},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":true,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"],"color":"999999"}},"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.9995,"acceleration":0.025,"kickingAcceleration":0.0175,"kickingDamping":0.9995,"kickStrength":5},"ballPhysics":{"radius":10,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"FFFFFF","cMask":["all"],"cGroup":["ball"]}}`

var password = []; //Map for code(key) and player name
var confirmed = []; //map for id and bool (true for confirmed)
var superAdmins = ["12", "123", "12345", "12345678"]; //messi,jinzo,khaled,Raamyy
var teams = ["spectators", "red", "Blue"];
var lastActionPlayer;

populatePasswords();

var room = HBInit({
		roomName: "The Pharon 🇪🇬 SPACEBALL | Raamyy™",
		maxPlayers: 16,
		playerName: "The Pharon 🌟 ",
		public: false
	});

log("room created");
room.setCustomStadium(spaceBall);
room.setScoreLimit(3);
room.setTimeLimit(3);

var redStreak = 0;
var blueStreak = 0;

var numberOfPlayedGames=0;
var largestWinningStreak=0;
var longestGameTime=0;
var numberOfScoredGoals=0;

//Welcomes the joined player and update admins
room.onPlayerJoin = function (player) {
	log(player.name + " joined the room ");
	room.sendChat("Welcome to the tomb, " + player.name + " !");
	room.sendChat("try #stats !");
	updateAdmins();
	confirmed[player.id] = false;
}

room.onPlayerLeave = function (player) {
	log(player.name + " left the room ");
	room.sendChat("Tomb door was closed on, " + player.name + " !");
	updateAdmins();
	if (getRedTeam().length != getBlueTeam().length && isGameRunnig()) //Checks if the left player affect the balance of team or not
	{
		room.pauseGame(true);
		room.sendChat("Teams not balanced !");
	}
}

room.onTeamVictory = function (scores) {
	
	
	//Red won the game
	if (scores.red > scores.blue) {
		log("Red team won " + scores.red + "/" + scores.blue);
		updateTeams("red"); //winner team is red

		room.sendChat("3aash red ♥");
		redStreak++;

		if (redStreak == 1)
			room.sendChat("Red team won a game !");
		else
			room.sendChat("Red is winning " + redStreak + " conecutive games !");

		if (blueStreak != 0)
			room.sendChat("Blue streak was " + blueStreak + " game, fa ma3lesh 🙂");
		//room.stopGame();
		blueStreak = 0;
	}

	//Blue won the game
	else {
		log("Blue team won " + scores.red + "/" + scores.blue);
		updateTeams("blue"); //winner team is blue

		room.sendChat("3aash Blue 💙");
		blueStreak++;

		if (blueStreak == 1)
			room.sendChat("Blue team won a game !");
		else
			room.sendChat("Blue is winning " + blueStreak + " conecutive games !");

		if (redStreak != 0)
			room.sendChat("Red streak was " + redStreak + " game, Sad to be broken :(");
		//room.stopGame();
		redStreak = 0;
	}
	
	numberOfPlayedGames++;
	
	if(redStreak>largestWinningStreak)
		largestWinningStreak=redStreak;
	
	if(blueStreak>largestWinningStreak)
		largestWinningStreak=blueStreak;
	
	if(scores.time>longestGameTime)
		longestGameTime=scores.time;
}
room.onTeamGoal = function (team) {
	numberOfScoredGoals++;
	goalScorer=lastActionPlayer;
	if(goalScorer.team != team)
		room.sendChat(goalScorer.name+" Scored an own goal!, NOOB");
	else
		room.sendChat(goalScorer.name+" Scored a goal");
	log(teams[team] + " team scored a goal");
}

room.onGameStart = function (player) {
	if (player != null)
		log(player.name + " started the game");
	else
		log("The game was started");
}

room.onGameStop = function (player) {
	if (player != null)
		log(player.name + " stopped the game");
}

room.onPlayerKicked = function (kicked, reason, ban, kicker) {
	if (ban)
		log(kicker.name + " banned " + kicked.name + " for reason " + reason);
	else
		log(kicker.name + " kicked " + kicked.name + " for reason " + reason);
}

//Bot Player commands
room.onPlayerChat = function (player, message) {
	log(player.name + " sent: " + message);

	if (message.toLowerCase() == "#commands") {
		room.sendChat("available commands #about , #confirm <password> , #admin <password> , #stats");
		room.sendChat("Admin commands #clearBans , #map <mapName>");
		room.sendChat("To see available map names type #mapNames");
	}
	if (message.toLowerCase() == "#mapnames")
		room.sendChat("Available maps are: spaceBall , m7md , nsl");

	if (message.substring(0, 8) == "#confirm") { //confirm
		let pass = message.substring(9);
		if (password[pass] != undefined) {
			room.sendChat("[ " + player.name + " ] " + password[pass] + " has confirmed");
			confirmed[player.id] = true;
			log(player.name + " confirmed as " + password[pass]);
		}
		return false;
	}
	if (message.substring(0, 6) == "#admin") { //admin
		if (confirmed[player.id] == false)
			room.sendChat("please confirm first");
		else {
			let pass = message.substring(7);
			if (superAdmins.includes(pass) == false)
				room.sendChat("You don't have super admin previlages");
			else
				room.setPlayerAdmin(player.id, true);
		}
		return false;
	}

	if (message.substring(0, 4) == "#map") {
		if (!player.admin) {
			room.sendChat("You have to be admin to change map");
			return;
		}

		let mapName = message.substr(5);
		mapName = mapName.toLowerCase();
		if (mapName == "spaceball")
			room.setCustomStadium(spaceBall);
		else if (mapName == "nsl")
			room.setCustomStadium(nsl);
		else if (mapName == "m7md")
			room.setCustomStadium(m7md);
	}

	if (message == "#about")
		room.sendChat("This is made by Raamyy !");

	if (message.toLowerCase() == "#clearbans" && player.admin) {
		room.clearBans();
		room.sendChat("Bans Cleared !");
	}
	if(message.toLowerCase()=="#stats"){
		room.sendChat("Number of played games is "+numberOfPlayedGames+" game(s) | largest winning streak is "+largestWinningStreak+" game(s)");
		room.sendChat("Longest game ended @ "+secondsToTime(longestGameTime)+" | Number of scored goals is "+numberOfScoredGoals+" goal(s)");
	}

}

room.onPlayerAdminChange = function (changed, changer) {
	updateAdmins();
	if (changed.admin)
		log(changer.name + " gave " + changed.name + " admin");
	else
		log(changer.name + " removed admin from " + changed.name);
}

room.onPlayerTeamChange = function (changed, changer) {
	log(changer.name + " moved " + changed.name + " to " + teams[changed.team]);
	if (changed.id == 0) //bot team can't be changed
		room.setPlayerTeam(0, 0); //set bot team to spectators
}

room.onGameTick=function() {
	var players = room.getPlayerList();
	var ballPosition = room.getBallPosition();
	var ballRadius = 10;
	var playerRadius = 15;
	var triggerDistance = ballRadius + playerRadius + 0.01;

	for (var i = 0; i < players.length; i++) { // Iterate over all the players
		var player = players[i];
		if ( player.position == null ) continue; // Skip players that don't have a position

		var distanceToBall = pointDistance(player.position, ballPosition);
		//var hadTouchedTheBall = playersThatTouchedTheBall.has(player.id)
		// This check is here so that the event is only notified the first game tick in which the player is touching the ball.
		
			if ( distanceToBall < triggerDistance ) {
				onBallTouch(player);
			}
		
	}
}

room.onPlayerBallKick= function(player){
	log(player.name+" kicked the ball");
	lastActionPlayer=player;
}

function onBallTouch(player){
	log(player.name+" touched ball");
	lastActionPlayer=player;
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function secondsToTime(seconds){
	var numberOfSeconds=Math.floor(seconds);
	var minuites=Math.floor(numberOfSeconds/60);
	var secs=numberOfSeconds%60;
	var s="";
	if(minuites<10)
		s+=0;
	s+=minuites;
	s+=":";
	if(secs<10)
		s+=0;
	s+=secs;
	return s ;
}

//Moving loser team to specs and top spec to loser
function updateTeams(winner) {

	if (winner == "red") {
		var blues = getBlueTeam();
		blues.reverse(); //reverse order of putting specs
		var i;
		for (i = 0; i < blues.length; i++) //loop on blue team and spec them
		{
			room.setPlayerTeam(blues[i].id, 0);
		}
		var specs = getSpectators();
		if (specs.length != 0)
			room.setPlayerTeam(specs[0].id, 2); //moving top spec to blue team
	} else if (winner == "blue") {
		var reds = getRedTeam();
		reds.reverse(); //reverse order of putting specs
		var i;
		for (i = 0; i < reds.length; i++) //loop on red team and spec them
		{
			room.setPlayerTeam(reds[i].id, 0);
		}
		var specs = getSpectators();
		if (specs.length != 0)
			room.setPlayerTeam(specs[0].id, 1); //moving top spec to red team
	}
}

//returns list of players in blue team
function getBlueTeam() {
	var blueTeam = room.getPlayerList().filter((player) => player.team == 2);
	return blueTeam;
}

//returns list of players in red team
function getRedTeam() {
	var redTeam = room.getPlayerList().filter((player) => player.team == 1);
	return redTeam	;
}

//returns list of players in spectators
function getSpectators() {
	var specs = room.getPlayerList().filter((player) => (player.team == 0 && player.id != 0)); //d
	return specs;
}

function isGameRunnig() {
	var test = room.getScores();
	if (test === null)
		return false;
	return true;
}

function updateAdmins() {
	// Get all players except the host (id = 0 is always the host)
	var players = room.getPlayerList().filter((player) => player.id != 0);
	if (players.length == 0)
		return; // No players left, do nothing.
	if (players.find((player) => player.admin) != null)
		return; // There's an admin left so do nothing.
	room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}

function populatePasswords() {
	// NOTE: Passwords should stay unique
	password["12"] = "3omar messi"; // 12 is the password .. 3omar messi is the player nickname linked to the password 
	password["123"] = "Jinzo";
	password["1234"] = "Kariem(Kemo)";
	password["12345"] = "Khaled CR";
	password["123456"] = "Opeth";
	password["1234567"] = "-|The flash|-";
	password["12345678"] = "Raamyy";
}

function log(message) {
	var d = new Date();
	console.log(d.getDate() + "/" + d.getMonth() + "/" + d.getYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + message);
}
}