# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Group.create!([
#   { name: 'Ben Franklin Labs' },
#   { name: 'General Assembly' },
#   { name: 'WDI Atlanta' },
#   { name: 'IniTech' }
# ])


    # var kitData = {'name': 'rock', 'samples': [
    #   {'name': 'kick', 'url': '/app/audio/rock-kit/rock-kick.wav'},
    #   {'name': 'snare', 'url': '/app/audio/rock-kit/rock-snare.wav'},
    #   {'name': 'open high hat', 'url': '/app/audio/rock-kit/rock-hh-open.wav'},
    #   {'name': 'closed high hat', 'url': '/app/audio/rock-kit/rock-hh-closed.wav'},
    #   {'name': 'floor tom', 'url': '/app/audio/rock-kit/rock-tom-floor.wav'},
    #   {'name': 'rack tom', 'url': '/app/audio/rock-kit/rock-tom-rack.wav'},
    #   {'name': 'ride cymbal bell', 'url': '/app/audio/rock-kit/rock-cymbal-ride-bell.wav'},
    #   {'name': 'crash cymbal', 'url': '/app/audio/rock-kit/rock-cymbal-crash.wav'}
    # ]};


Score.destroy_all   
Notation.destroy_all
Kit.destroy_all

score = Score.create(name:'Rock Demo')

rock_kit = Kit.create(name: 'Rock', score: score)

Sample.create([
  { name: 'kick',             
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-kick.wav' },
  { name: 'snare',            
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-snare.wav' },
  { name: 'open high hat',    
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-hh-open.wav' },
  { name: 'closed high hat',  
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-hh-closed.wav' },
  { name: 'floor tom',        
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-tom-floor.wav' },
  { name: 'rack tom',         
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-tom-rack.wav' },
  { name: 'ride cymbal bell', 
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-cymbal-ride-bell.wav' },
  { name: 'crash cymbal',     
    kit:  rock_kit, 
    url:  '/app/audio/rock-kit/rock-cymbal-crash.wav' }
  ])


demo = Notation.create(
  name: 'Demo', time_signature: 4, bpm: 104, score: score)

channels = Channel.create([
  { number: 1, notation: demo },
  { number: 2, notation: demo },
  { number: 3, notation: demo },
  { number: 4, notation: demo },
  { number: 5, notation: demo },
  { number: 6, notation: demo },
  { number: 7, notation: demo },
  { number: 8, notation: demo }
])

channels.each do |channel|
  Note.create([
    { time: '0:0:0', value: '.', channel: channel }, 
    { time: '0:0:1', value: ' ', channel: channel }, 
    { time: '0:0:2', value: ' ', channel: channel }, 
    { time: '0:0:3', value: ' ', channel: channel }, 
    { time: '0:1:0', value: ' ', channel: channel }, 
    { time: '0:1:1', value: ' ', channel: channel }, 
    { time: '0:1:2', value: ' ', channel: channel }, 
    { time: '0:1:3', value: ' ', channel: channel }, 
    { time: '0:2:0', value: '.', channel: channel }, 
    { time: '0:2:1', value: ' ', channel: channel }, 
    { time: '0:2:2', value: ' ', channel: channel }, 
    { time: '0:2:3', value: ' ', channel: channel }, 
    { time: '0:3:0', value: ' ', channel: channel }, 
    { time: '0:3:1', value: ' ', channel: channel }, 
    { time: '0:3:2', value: ' ', channel: channel }, 
    { time: '0:3:3', value: ' ', channel: channel }, 
    { time: '1:0:0', value: '.', channel: channel }, 
    { time: '1:0:1', value: ' ', channel: channel }, 
    { time: '1:0:2', value: ' ', channel: channel }, 
    { time: '1:0:3', value: ' ', channel: channel }, 
    { time: '1:1:0', value: ' ', channel: channel }, 
    { time: '1:1:1', value: ' ', channel: channel }, 
    { time: '1:1:2', value: ' ', channel: channel }, 
    { time: '1:1:3', value: ' ', channel: channel }, 
    { time: '1:2:0', value: '.', channel: channel }, 
    { time: '1:2:1', value: ' ', channel: channel }, 
    { time: '1:2:2', value: ' ', channel: channel }, 
    { time: '1:2:3', value: ' ', channel: channel }, 
    { time: '1:3:0', value: ' ', channel: channel }, 
    { time: '1:3:1', value: ' ', channel: channel }, 
    { time: '1:3:2', value: ' ', channel: channel }, 
    { time: '1:3:3', value: ' ', channel: channel }
  ])
end
