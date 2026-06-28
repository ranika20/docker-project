FROM node:20-alpine

WORKDIR /app

# תיקון 1: הוספת נקודה בסוף בשביל היעד
COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# תיקון 2: שינוי שם הקובץ ל-app.js לפי מה שיש בפרויקט
CMD ["node", "app.js"]