from pymongo import MongoClient
from datetime import timedelta
from bson import ObjectId

client = MongoClient('localhost', 27017)
db = client['octofit_db']

# Drop existing collections
db.users.drop()
db.teams.drop()
db.activity.drop()
db.leaderboard.drop()
db.workouts.drop()

# Create users
test_users = [
    {"_id": ObjectId(), "username": "thundergod", "email": "thundergod@mhigh.edu", "password": "thundergodpassword"},
    {"_id": ObjectId(), "username": "metalgeek", "email": "metalgeek@mhigh.edu", "password": "metalgeekpassword"},
    {"_id": ObjectId(), "username": "zerocool", "email": "zerocool@mhigh.edu", "password": "zerocoolpassword"},
    {"_id": ObjectId(), "username": "crashoverride", "email": "crashoverride@hmhigh.edu", "password": "crashoverridepassword"},
    {"_id": ObjectId(), "username": "sleeptoken", "email": "sleeptoken@mhigh.edu", "password": "sleeptokenpassword"},
]
user_ids = db.users.insert_many(test_users).inserted_ids

# Create teams
blue_team = {"_id": ObjectId(), "name": "Blue Team", "members": user_ids}
gold_team = {"_id": ObjectId(), "name": "Gold Team", "members": user_ids}
db.teams.insert_many([blue_team, gold_team])

# Create activities
test_activities = [
    {"_id": ObjectId(), "user": user_ids[0], "activity_type": "Cycling", "duration": 60},
    {"_id": ObjectId(), "user": user_ids[1], "activity_type": "Crossfit", "duration": 120},
    {"_id": ObjectId(), "user": user_ids[2], "activity_type": "Running", "duration": 90},
    {"_id": ObjectId(), "user": user_ids[3], "activity_type": "Strength", "duration": 30},
    {"_id": ObjectId(), "user": user_ids[4], "activity_type": "Swimming", "duration": 75},
]
db.activity.insert_many(test_activities)

# Create leaderboard entries
test_leaderboard = [
    {"_id": ObjectId(), "user": user_ids[0], "score": 100},
    {"_id": ObjectId(), "user": user_ids[1], "score": 90},
    {"_id": ObjectId(), "user": user_ids[2], "score": 95},
    {"_id": ObjectId(), "user": user_ids[3], "score": 85},
    {"_id": ObjectId(), "user": user_ids[4], "score": 80},
]
db.leaderboard.insert_many(test_leaderboard)

# Create workouts
test_workouts = [
    {"_id": ObjectId(), "name": "Cycling Training", "description": "Training for a road cycling event"},
    {"_id": ObjectId(), "name": "Crossfit", "description": "Training for a crossfit competition"},
    {"_id": ObjectId(), "name": "Running Training", "description": "Training for a marathon"},
    {"_id": ObjectId(), "name": "Strength Training", "description": "Training for strength"},
    {"_id": ObjectId(), "name": "Swimming Training", "description": "Training for a swimming competition"},
]
db.workouts.insert_many(test_workouts)

print("Successfully populated octofit_db with test data.")
