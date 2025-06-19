document.addEventListener("DOMContentLoaded", () => {
  // ========== Live Clock ==========
  function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const clockEl = document.getElementById('clock');
    if (clockEl) clockEl.textContent = "🕒 " + timeStr;
  }
  setInterval(updateClock, 1000);
  updateClock();

  // ========== Progress Bars ==========
  document.querySelectorAll('.progress-container').forEach(container => {
    const completed = parseInt(container.dataset.completed);
    const total = parseInt(container.dataset.total);
    const percent = Math.round((completed / total) * 100);

    const fill = container.querySelector('.fill');
    const text = container.querySelector('.progress-text');

    if (fill) fill.style.width = percent + '%';
    if (text) text.textContent = `Progress: ${completed}/${total} (${percent}%)`;
  });

  // ========== Date ==========
  const dateElement = document.getElementById("date");
  if (dateElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString(undefined, options);
    dateElement.textContent = "📅 " + today;
  }

  // ========== Motivational Quotes ==========
  const quotes = [
    "Progress, not perfection.",
    "The best way to get started is to quit talking and begin doing.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Do not watch the clock. Do what it does. Keep going.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Believe you can and you're halfway there.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Start where you are. Use what you have. Do what you can.",
    "Discipline is doing what needs to be done, even when you don't want to.",
    "You don't have to be great to start, but you have to start to be great.",
    "A little progress each day adds up to big results.",
    "If it matters to you, you'll find a way.",
    "Done is better than perfect.",
    "Your future is created by what you do today, not tomorrow.",
    "Failure is not the opposite of success; it's part of success.",
    "Stay hungry. Stay foolish.",
    "What seems hard now will one day be your warm-up.",
    "Do it scared.",
    "Action beats intention.",
    "Make it happen. Shock everyone.",
    "The secret of getting ahead is getting started.",
    "Small steps every day.",
    "You are your only limit.",
    "Start now. Don't wait.",
    "Turn pressure into progress.",
    "Consistency creates confidence.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Everything you need is already inside you.",
    "Keep your eyes on the stars and your feet on the ground.",
    "One day or day one. You decide.",
    "You miss 100% of the shots you don't take.",
    "Work in silence. Let your success make the noise.",
    "Be stubborn about your goals, but flexible about your methods.",
    "Growth begins at the end of your comfort zone.",
    "Don't limit your challenges. Challenge your limits.",
    "If you're tired, do it tired.",
    "Success doesn't come from what you do occasionally—it comes from what you do consistently.",
    "Winners are not afraid of losing.",
    "Success is built on daily habits—not on inspiration.",
    "You don't get what you wish for. You get what you work for.",
    "Today's efforts are tomorrow's results.",
    "Be so good they can't ignore you.",
    "Keep going. You're closer than you think.",
    "Hard work beats talent when talent doesn't work hard.",
    "Don't watch others. Run your own race.",
    "Make your why bigger than your excuses.",
    "Do the work others won't, so you'll have what others don't.",
    "Fall seven times. Stand up eight.",
    "Let your dreams be bigger than your fears.",
    "It always seems impossible until it's done.",
    "Comfort is the enemy of achievement.",
    "Success is no accident. It is hard work and perseverance.",
    "Stop doubting yourself. Work hard and make it happen.",
    "Energy and persistence conquer all things.",
    "Be the hardest worker in the room.",
    "Every accomplishment starts with the decision to try.",
    "Trust the process.",
    "The comeback is always stronger than the setback.",
    "You've got this.",
    "Your only competition is who you were yesterday.",
    "Think big. Start small. Move fast."
  ];

  const quoteEl = document.getElementById("motivational-quote");
  const btn = document.getElementById("new-quote-btn");

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  if (btn && quoteEl) {
    btn.addEventListener("click", () => {
      quoteEl.textContent = `"${getRandomQuote()}"`;
    });
    quoteEl.textContent = `"${getRandomQuote()}"`;
  }


  // Highlight current nav link
  document.querySelectorAll('.navbar a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });


  // Light/Dark Mode Toggle
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  
  // Load saved theme
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    toggleBtn.textContent = isLight ? "🌙" : "☀️";
  });

});