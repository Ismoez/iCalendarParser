//var ical_file = 'sample.ics';
var ical_file = 'export.ics';
//var ical_file = 'https://forum.hardedge.org/calendar/index.php?calendar-export/7/';
		
//run ical parser on load
var icalParser=null;
window.addEventListener("load", function(){
	//Create new ical parser
	icalParser=new ical_parser(ical_file, function(cal){
		//When ical parser has loaded file
		//get future events
		events = cal.getFutureEvents();
		//events = cal.getEvents();
		//And display them
		//displayDemo(events);
		//displayobjs(events);
		displaydemo2(events);
	});			
}, false);

function displayobjs(events){
var a=JSON.stringify(events);
var el=document.getElementById("debug");
el.innerHTML=a;
}
//Display All future events in ical file as list.
function displayDemo(events){
	//Foreach event
	events.forEach(function(event){
		//Create a list item
		var li = document.createElement('li');
		//Add details from cal file.
		li.innerHTML = '<strong>' +event.SUMMARY + '</strong><br/> ' +
event.day + ': ' +event.start_time + ' - ' + event.end_time + ' ('+event.start_date+ ')' ;
		//Add list item to list.
		document.getElementById('calendar').appendChild(li);	
	});
}
function monthName(iMonth){
	//return Date.locale['en'].month_names_short(iMonth);
	return iMonth;
}
function displaydemo2(events){
	//Foreach event
	var container=document.getElementById("iCal");
	events.forEach(function(event){
		//Create a list item
		var a1=document.createElement('a');
		a1.className="ai1ec-date-title ai1ec-load-view";
		a1.href=event.URL;
			var div_month=document.createElement("div");
			div_month.className="ai1ec-month";	
				var txt=document.createTextNode(monthName(event.DTSTART.getMonth() ) );
				div_month.appendChild(txt);

			var div_day=document.createElement("div");
			div_day.className="ai1ec-day";
				var txt=document.createTextNode(event.DTSTART.getDay() );
				div_day.appendChild(txt);

			var div_weekday=document.createElement("div");
			div_weekday.className="ai1ec-weekday";
				var txt=document.createTextNode(event.day);	
				div_weekday.appendChild(txt);
		a1.appendChild(div_month);
		a1.appendChild(div_day);
		a1.appendChild(div_weekday);
	container.appendChild(a1);

		var div1=document.createElement("div");
		div1.className="ai1ec-date-events";
			var div2=document.createElement("div");
			div2.className="ai1ec-event	ai1ec-event-id-181083	ai1ec-event-instance-id-1";
				var a2=document.createElement("a");
				a2.className="ai1ec-popup-trigger ai1ec-load-event";
				a2.href=event.URL;
					var span_time=document.createElement("span");
					span_time.className="ai1ec-event-time";
						var txt=document.createTextNode(event.start_time);
						span_time.appendChild(txt);
				a2.appendChild(span_time);
					var span_title=document.createElement("span");
					span_title.className="ai1ec-event-title";
						var txt=document.createTextNode(event.SUMMARY);
						span_title.appendChild(txt);
				a2.appendChild(span_title);
			div2.appendChild(a2);	
		div1.appendChild(div2);	
			/*
			var div_popover=document.createElement("div");
			div_popover.className="ai1ec-popover ai1ec-popup ai1ec-event-instance-id-1";
				var span_popover=document.createElement("span");
				span_popover.className="ai1ec-popup-title";
					var a_popover=document.createElement("a"); 
					a_popover.className="ai1ec-load-event";
					a_popover.href=event.URL;
						var txt=document.createTextNode(event.SUMMARY);
					a_popover.appendChild(txt);
				span_popover.appendChild(a_popover);
				div_popover.appendChild(span_popover);
				//	var a2_popover=document.createElement("a");
				var div_event_time=document.createElement("div");
				div_event_time.className="ai1ec-event-time";
					var txt=document.createTextNode(event.start_date);
				div_event_time.appendChild(txt);
			div_popover.appendCild(div_event_time);
				var div_description=document.createElement("div");	
				div_description.className="ai1ec-popup-excerpt";
					var txt=document.createTextNode(event.DESCRIPTION);
				div_description.appendChild(txt);
			div_popover.appendCild(div_description);
		div1.appendChild(div_popover);	
		*/
	container.appendChild(div1);
	});
}
