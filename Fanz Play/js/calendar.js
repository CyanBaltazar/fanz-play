$(document).ready(function() {
  // bind html view with the calendar js
  $( '#calendar' ).calendario();

  // calculate month and year
  $(function() {

        var cal = $( '#calendar' ).calendario( {
            onDayClick : function( $el, $contentEl, dateProperties ) {

              for( var key in dateProperties ) {
                console.log( key + ' = ' + dateProperties[ key ] );
              }

            },
            caldata : codropsEvents
          } ),
          $month = $( '#custom-month' ).html( cal.getMonthName() ),
          $year = $( '#custom-year' ).html( cal.getYear() );

        $( '#custom-next' ).on( 'click', function() {
          cal.gotoNextMonth( updateMonthYear );
        } );
        $( '#custom-prev' ).on( 'click', function() {
          cal.gotoPreviousMonth( updateMonthYear );
        } );
        $( '#custom-current' ).on( 'click', function() {
          cal.gotoNow( updateMonthYear );
        } );

        function updateMonthYear() {
          $month.html( cal.getMonthName() );
          $year.html( cal.getYear() );
        }

        // you can also add more data later on. As an example:
        /*
        someElement.on( 'click', function() {

          cal.setData( {
            '03-01-2013' : '<a href="#">testing</a>',
            '03-10-2013' : '<a href="#">testing</a>',
            '03-12-2013' : '<a href="#">testing</a>'
          } );
          // goes to a specific month/year
          cal.goto( 3, 2013, updateMonthYear );

        } );
        */

      });


      $(function () {
        $(' #custom-prev ').on( 'click' , function () {
          $(this).css('background-color', 'transparent');
          $(this).css('color', '#ffffff');
        });

        $(' #custom-next ').on( 'click' , function () {
          $(this).css('background-color', 'transparent');
          $(this).css('color', '#ffffff');
        });

        $(' #custom-current ').on( 'click' , function () {
          $(this).css('background-color', 'transparent');
          $(this).css('color', '#00BCD4');
        });
      });




      // Previous and next date functionality
      $(function() {

        var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
          },
          transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
          $wrapper = $( '#custom-inner' ),
          $calendar = $( '#calendar' ),
          cal = $calendar.calendario( {
            onDayClick : function( $el, $contentEl, dateProperties ) {

              if( $contentEl.length > 0 ) {
                showEvents( $contentEl, dateProperties );
              }

            },
            caldata : codropsEvents,
            displayWeekAbbr : true
          } ),
          $month = $( '#custom-month' ).html( cal.getMonthName() ),
          $year = $( '#custom-year' ).html( cal.getYear() );

        $( '#custom-next' ).on( 'click', function() {
          cal.gotoNextMonth( updateMonthYear );
        } );
        $( '#custom-prev' ).on( 'click', function() {
          cal.gotoPreviousMonth( updateMonthYear );
        } );

        function updateMonthYear() {
          $month.html( cal.getMonthName() );
          $year.html( cal.getYear() );
        }

        // just an example..
        function showEvents( $contentEl, dateProperties ) {

          hideEvents();

          var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
            $close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

          $events.append( $contentEl.html() , $close ).insertAfter( $wrapper );

          setTimeout( function() {
            $events.css( 'top', '0%' );
          }, 25 );

        }
        function hideEvents() {

          var $events = $( '#custom-content-reveal' );
          if( $events.length > 0 ) {

            $events.css( 'top', '100%' );
            Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

          }

        }
      });

      // Add class to custom-month and custom-year
      $(function () {
        $('#custom-month').attr('class', 'custom-month');
        $('#custom-year').attr('class', 'custom-year');
      });




      /* Adding of event to calendar upon clicking a particular date */
      $(function () {
        $(".fc-calendar .fc-row > div").click(function () {
          $("#addEventModal").modal("show");



          var clickedDiv = $(this);

          $("#button-add-event").click(function () {
            var event_team_1 = $("#event-team-1").val();
            var event_team_2 = $("#event-team-2").val();
            $(clickedDiv).append("<br>" + event_team_1 + " vs " + event_team_2);
            console.log($(clickedDiv).length);

          });



          });



      });
      /* Adding of event to calendar upon clicking a particular date */






});
