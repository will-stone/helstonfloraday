<script>
  function generateDates() {
    const now = new Date()
    const nowYear = now.getFullYear()
    const eighthThisYear = new Date(nowYear, 4, 8)
    const isAfterFloraDay = now > eighthThisYear

    return Array.from({ length: 7 }).map((_, index) => {
      const year = nowYear + (isAfterFloraDay ? index + 1 : index)
      const eighth = new Date(year, 4, 8)
      const eighthDay = eighth.getDay()
      const adjustedDate = new Date(
        year,
        4,
        eighthDay < 2 ? 8 - (eighthDay + 1) : 8,
      )

      return {
        year: year,
        date: adjustedDate.getDate() + 'th',
        day: adjustedDate.toLocaleDateString('en', { weekday: 'long' }),
      }
    })
  }

  const dates = generateDates()
</script>

{#each dates as date}
  <div class="flex items-center space-x-4">
    <div
      class="flex size-20 items-center justify-center bg-tertiary p-4 text-center font-display text-2xl text-white"
    >
      {date.year}
    </div>
    <div>
      <span class="text-2xl font-bold">{date.day} {date.date}</span>
      <span class="text-base text-tertiary"> May</span>
    </div>
  </div>
{/each}
