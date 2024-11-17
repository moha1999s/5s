/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"  // إضافة مسار أي ملفات تستخدم فيها Tailwind
  ],
  theme: {
    extend: {

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        edu: ['Edu', 'sans-serif'],
        tilt: ['Tilt Neon"', 'sans-serif'],
        co: ['Carlito'],
    },
  },
  plugins: [],
}
}
