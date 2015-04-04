'use strict';

angular.module('dotBang')
  .service('NotationService', ['$http', function($http) {

    var noteServ = this;

    noteServ.getNotations = function() {
      return $http.get('/api/notations');
    };

    noteServ.getNotation = function(notation) {
      return $http.get('/api/notations/' + notation.id);
    };

    noteServ.notation = 
      {'name': 'demo', 'timeSignature': '4', 'channels': [  //save time signature here?  bar count?
        {'number':'01', 'notes': [
          {'time':'0:0:0', 'value':'.'},{'time':'0:0:1', 'value':' '},
          {'time':'0:0:2', 'value':' '},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':' '},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':' '},
          {'time':'0:2:0', 'value':'.'},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':' '},{'time':'0:2:3', 'value':' '},
          {'time':'0:3:0', 'value':' '},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':'.'},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':' '},{'time':'1:1:1', 'value':' '},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':'.'},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':' '},
          {'time':'1:3:0', 'value':' '},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        },
        {'number':'02', 'notes': [
          {'time':'0:0:0', 'value':' '},{'time':'0:0:1', 'value':'.'},
          {'time':'0:0:2', 'value':' '},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':'.'},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':' '},
          {'time':'0:2:0', 'value':' '},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':' '},{'time':'0:2:3', 'value':' '},
          {'time':'0:3:0', 'value':' '},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':' '},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':' '},{'time':'1:1:1', 'value':' '},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':' '},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':' '},
          {'time':'1:3:0', 'value':' '},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        },
        {'number':'03', 'notes': [
          {'time':'0:0:0', 'value':' '},{'time':'0:0:1', 'value':' '},
          {'time':'0:0:2', 'value':'.'},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':' '},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':' '},
          {'time':'0:2:0', 'value':' '},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':' '},{'time':'0:2:3', 'value':' '},
          {'time':'0:3:0', 'value':' '},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':' '},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':' '},{'time':'1:1:1', 'value':' '},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':' '},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':' '},
          {'time':'1:3:0', 'value':'.'},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        },
        {'number':'04', 'notes': [
          {'time':'0:0:0', 'value':' '},{'time':'0:0:1', 'value':' '},
          {'time':'0:0:2', 'value':' '},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':' '},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':'.'},
          {'time':'0:2:0', 'value':' '},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':' '},{'time':'0:2:3', 'value':' '},
          {'time':'0:3:0', 'value':' '},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':' '},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':' '},{'time':'1:1:1', 'value':' '},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':' '},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':'.'},
          {'time':'1:3:0', 'value':' '},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        },
        {'number':'05', 'notes': [
          {'time':'0:0:0', 'value':' '},{'time':'0:0:1', 'value':' '},
          {'time':'0:0:2', 'value':' '},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':' '},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':' '},
          {'time':'0:2:0', 'value':' '},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':'.'},{'time':'0:2:3', 'value':'.'},
          {'time':'0:3:0', 'value':' '},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':' '},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':' '},{'time':'1:1:1', 'value':' '},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':' '},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':' '},
          {'time':'1:3:0', 'value':' '},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        },
        {'number':'06', 'notes': [
          {'time':'0:0:0', 'value':' '},{'time':'0:0:1', 'value':' '},
          {'time':'0:0:2', 'value':' '},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':' '},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':'.'},
          {'time':'0:2:0', 'value':' '},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':' '},{'time':'0:2:3', 'value':' '},
          {'time':'0:3:0', 'value':' '},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':' '},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':' '},{'time':'1:1:1', 'value':'.'},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':' '},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':' '},
          {'time':'1:3:0', 'value':' '},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        },
        {'number':'07', 'notes': [
          {'time':'0:0:0', 'value':' '},{'time':'0:0:1', 'value':' '},
          {'time':'0:0:2', 'value':' '},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':' '},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':' '},
          {'time':'0:2:0', 'value':'.'},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':' '},{'time':'0:2:3', 'value':' '},
          {'time':'0:3:0', 'value':'.'},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':'.'},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':'.'},{'time':'1:1:1', 'value':' '},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':' '},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':' '},
          {'time':'1:3:0', 'value':' '},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        },
        {'number':'08', 'notes': [
          {'time':'0:0:0', 'value':'.'},{'time':'0:0:1', 'value':' '},
          {'time':'0:0:2', 'value':' '},{'time':'0:0:3', 'value':' '},
          {'time':'0:1:0', 'value':' '},{'time':'0:1:1', 'value':' '},
          {'time':'0:1:2', 'value':' '},{'time':'0:1:3', 'value':' '},
          {'time':'0:2:0', 'value':' '},{'time':'0:2:1', 'value':' '},
          {'time':'0:2:2', 'value':' '},{'time':'0:2:3', 'value':' '},
          {'time':'0:3:0', 'value':' '},{'time':'0:3:1', 'value':' '},
          {'time':'0:3:2', 'value':' '},{'time':'0:3:3', 'value':' '},
          {'time':'1:0:0', 'value':'.'},{'time':'1:0:1', 'value':' '},
          {'time':'1:0:2', 'value':' '},{'time':'1:0:3', 'value':' '},
          {'time':'1:1:0', 'value':' '},{'time':'1:1:1', 'value':' '},
          {'time':'1:1:2', 'value':' '},{'time':'1:1:3', 'value':' '},
          {'time':'1:2:0', 'value':' '},{'time':'1:2:1', 'value':' '},
          {'time':'1:2:2', 'value':' '},{'time':'1:2:3', 'value':' '},
          {'time':'1:3:0', 'value':' '},{'time':'1:3:1', 'value':' '},
          {'time':'1:3:2', 'value':' '},{'time':'1:3:3', 'value':' '}]
        }
        ]
      };

      // Am i using this? Should it be used for drumCount in sampler loop?  
      // will there be a need to check that the number of voices matches the number of channels?
      noteServ.channelCount = noteServ.notation.channels.length;

      // sets time signature on load - TODO move to function that gets called whenever notation loaded.
      // $scope.timeSignature in transport controller might need to be manually updated.
      Tone.Transport.timeSignature = parseInt(noteServ.notation.timeSignature, 10);


      // time signature changes can come from two places: notation JSON and transport controller
      // transport controller is passed in .... notation already here .... 

      // also set on load
      var currentTimeSignature = parseInt(noteServ.notation.timeSignature, 10);

      function correctTimeSignature() {
       return Tone.Transport.timeSignature === currentTimeSignature;
      }

      function addOrRemoveBeats() {
        var difference = Tone.Transport.timeSignature - currentTimeSignature;
        if (difference < 0) {
          removeBeats(Math.abs(difference));
        } else {
          addBeats(difference);
        }
      }

      function removeBeats(num){
        var length = noteServ.notation.channels[0].notes.length;
        var middle = noteServ.notation.channels[0].notes.length / 2; 
        var numToRemove = 4 * num;
        var endIndex = length - numToRemove;
        var middleIndex = middle - numToRemove;

        _.forEach(noteServ.notation.channels, function(channel){
          channel.notes.splice(endIndex, numToRemove);
          channel.notes.splice(middleIndex, numToRemove);
        });
      }

      function addBeats(){
        var length = noteServ.notation.channels[0].notes.length;
        var middle = noteServ.notation.channels[0].notes.length / 2; 
        // var numToAdd = 4 * num;
        // var endIndex = length;
        // var middleIndex = middle;
        // var x = currentTimeSignature;

        var addToEnd = addQuarterNotes(currentTimeSignature, 1);
        var addToMiddle = addQuarterNotes(currentTimeSignature, 0);

        // console.log(JSON.stringify(addToMiddle));        
        // console.log(addToEnd);        

        _.forEach(noteServ.notation.channels, function(channel){
          var chunkedNotes = _.chunk(channel.notes, middle);
          var firstBar = chunkedNotes[0].concat(addToMiddle);
          var secondBar = chunkedNotes[1].concat(addToEnd);
          channel.notes = firstBar.concat(secondBar);
          // console.log(channel.notes);
          // channel.notes.splice(endIndex, 0, addToEnd);
          // channel.notes.splice(middleIndex, 0, addToMiddle);
        });

        console.log(noteServ.notation.channels[0].notes);
      }

      // adding notes...
      // if middle -- '0:' + x + ':' + y [0, 1, 2, 3]
      // if end -- '1:' + x + ':'  + y [0, 1, 2, 3]

      // adding example:  old - 3,  new - 5
      // x will equal 3, then 4  - twice, at middle and end -
      // difference (num) would be 2

    


      function addQuarterNotes(startNum, startMeasure){
        var toAdd = [];
        for (var x = startNum; x < Tone.Transport.timeSignature; x++) {
          for (var y = 0; y < 4; y++) {
            var addedNote = new Note(startMeasure, x, y, ' ');
            toAdd.push(addedNote);
          }
        }
        return toAdd; 
      }
         

      var Note = function(bar, quarter, sixteenth, value) {
        this.time = bar + ':' + quarter + ':' + sixteenth;
        this.value = value;
      };

      this.changeTimeSignature = function(timeSign){
        Tone.Transport.timeSignature = timeSign;
        // console.log(Tone.Transport.timeSignature);
        if (!correctTimeSignature()) {
          addOrRemoveBeats();
          currentTimeSignature = Tone.Transport.timeSignature; 
        }
      };


      //valid time signs over four?         3,   4,  5,  7
      //corresponding # of 16th notes       12, 16, 20, 28
      //in two bars                         24, 32, 40, 56


      // true - do nothing
      // false - calculate change.
      // negative change - remove measures
      // positive change - add measures

  }]);