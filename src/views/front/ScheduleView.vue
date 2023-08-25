<template>
  <section class="container py-10">
    <FullCalendar :options='calendarOptions' />
  </section>
  {{ id }}
</template>

<script type="modules">
// const { CALENDAR_API_KEY, CALENDAR_ID } = import.meta.env
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import twLocale from '@fullcalendar/core/locales/zh-tw';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default {
  components: {
    FullCalendar
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, googleCalendarPlugin],
        themeSystem: 'bootstrap',
        initialView: 'dayGridMonth',
        weekends: true,
        firstDay: 1,     
        locale: twLocale,
        googleCalendarApiKey: 'AIzaSyCqTAueQHGocCD3JYa6WIuA4AoFawppHlM',
        eventSources: [
          {
            googleCalendarId: 'dabec340a53599c225f89de8dee21e36ac754ab523f6c410225a7c1250867665@group.calendar.google.com',
            color: '#f2bcab',
            textColor: '#3f3f3f'
          },{
            googleCalendarId: '6fa7fd43bf96b4739892759225f99ea031d9d67f9589067f474393072a117130@group.calendar.google.com',
            color: '#4bc7dd',
            textColor: '#3f3f3f'
          },{
            googleCalendarId: '9524ccfa0a2d15793a2207d3f92436bb1f288c41534f0abbd64814718d349b3b@group.calendar.google.com',
            color: '#f7c24f',
            textColor: '#3f3f3f'
          },{
            googleCalendarId: 'eb49f2a09c86174db6db35d752acfbec716bdf07dafe5904ea4ce6645862a021@group.calendar.google.com',
            color: '#b6a3ed',
            textColor: '#3f3f3f'
          }],
        contentHeight: 600,
        eventClick: function(info) {
          info.jsEvent.preventDefault();
        },
      }
    }
  },
}
</script>

<style scoped>
</style>