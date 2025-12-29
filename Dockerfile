FROM node:24-alpine

# Set environment
ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy application source
COPY server.js .
COPY index.html .

# Copy static assets (must match express.static path)
COPY assets ./assets

# Optional: non-root user for security
RUN addgroup -S app && adduser -S app -G app
USER app

# Expose application port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
