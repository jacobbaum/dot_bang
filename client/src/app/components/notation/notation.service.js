'use strict';

angular.module('dotBang')
  .service('NotationService', ['$http', '$rootScope', function($http, $rootScope) {

    var noteServ = this;

    // set noteServ.notation here, so that notation info can be seen across controllers
    // set default notation with following logic... if signed in user, last user beat.
    // if not signed in user, sample from presets.

    // add preset field to notation.  set permissions... if preset, read only.
    // if not preset, all crud.
    // if preset,  save as (create).
    // if not, save(update) or save as.

    noteServ.getNotations = function() {
      return $http.get('/api/notations');
    };

    noteServ.getNotation = function(notation) {
      $http.get('/api/notations/' + notation.id)
      .success(function(data){
        noteServ.notation = data;
        noteServ.currentTimeSignature = noteServ.notation['time_signature'];
        console.log(noteServ.notation['time_signature']);
        console.log(noteServ.currentTimeSignature);
      })
      .error(function() {
        alert('GET: error');
      })
      .then(function(){
        $rootScope.$emit('notation loaded');
      });
    };

    noteServ.addNotation = function(notation){
      // console.log({ notation: notation });
      $http.post('/api/notations/', { notation: notation } )
      .success(function(data){
        noteServ.notation = data;
        noteServ.currentTimeSignature = noteServ.notation['time_signature'];
      })
      .error(function() {
        alert('POST: error');
      })
      .then(function(){
        $rootScope.$emit('notation loaded');
      });
    };

    noteServ.updateNotation = function(notation){
      // console.log({ notation: notation });
      $http.put('/api/notations/' + notation.id, { notation: notation } )
      .success(function(data){
        console.log('success');
        // noteServ.notation = data;
      })
      .error(function() {
        alert('PUT: error');
      });
      // .then(function(){
      //   $rootScope.$emit('notation loaded');
      // });
    };



  //   noteServ.channelCount = noteServ.notation.channels.length;

    // ... delegated to transport controller ...
    // sets time signature on load - TODO move to function that gets called whenever notation loaded.
    // $scope.timeSignature in transport controller might need to be manually updated.
    // Tone.Transport.timeSignature = parseInt(noteServ.notation.timeSignature, 10);

    // time signature changes can come from two places: notation JSON and transport controller
    // transport controller is passed in .... notation already here .... 

    // also set on load

      function correctTimeSignature() {
       return Tone.Transport.timeSignature === noteServ.currentTimeSignature;
      }

      function addOrRemoveBeats() {
        var difference = Tone.Transport.timeSignature - noteServ.currentTimeSignature;
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
        // var x = noteServ.currentTimeSignature;



        // console.log(JSON.stringify(addToMiddle));        
        // console.log(addToEnd);        

        _.forEach(noteServ.notation.channels, function(channel){
          var addToEnd = addQuarterNotes(noteServ.currentTimeSignature, 1);
          var addToMiddle = addQuarterNotes(noteServ.currentTimeSignature, 0);
          var chunkedNotes = _.chunk(channel.notes, middle);
          var firstBar = chunkedNotes[0].concat(addToMiddle);
          var secondBar = chunkedNotes[1].concat(addToEnd);
          channel.notes = firstBar.concat(secondBar);
          // console.log(channel.notes);
          // channel.notes.splice(endIndex, 0, addToEnd);
          // channel.notes.splice(middleIndex, 0, addToMiddle);
        });

        console.log(noteServ.notation.channels[0].notes);
        console.log(noteServ.notation.channels[1].notes);
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
        this.id = _.uniqueId();
      };

      this.changeTimeSignature = function(timeSign){
        Tone.Transport.timeSignature = timeSign;
        // console.log(Tone.Transport.timeSignature);
        if (!correctTimeSignature()) {
          addOrRemoveBeats();
          noteServ.currentTimeSignature = Tone.Transport.timeSignature; 
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