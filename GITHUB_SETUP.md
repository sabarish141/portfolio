# GitHub Setup Instructions

## Important: GitHub Password Authentication

GitHub no longer accepts passwords for HTTPS authentication. You need to use a **Personal Access Token** instead.

## Step 1: Create a Personal Access Token

1. Go to GitHub.com and sign in
2. Click your profile picture → **Settings**
3. Scroll down to **Developer settings** (left sidebar)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name: "Portfolio Website"
7. Select scopes: Check **repo** (full control of private repositories)
8. Click **Generate token**
9. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Description: "My professional portfolio website"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

## Step 3: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote (replace YOUR_USERNAME with sabarish141)
git remote add origin https://github.com/sabarish141/portfolio.git

# Push to GitHub
git push -u origin main
```

When prompted for password, **paste your Personal Access Token** instead of your password.

## Alternative: Using SSH (Recommended for future)

If you prefer SSH (no token needed each time):

1. Generate SSH key: `ssh-keygen -t ed25519 -C "sabarish27hov@gmail.com"`
2. Add to GitHub: Settings → SSH and GPG keys → New SSH key
3. Use SSH URL: `git remote set-url origin git@github.com:sabarish141/portfolio.git`

## Troubleshooting

- **"Authentication failed"**: Make sure you're using the token, not password
- **"Repository not found"**: Check repository name and your username
- **"Permission denied"**: Verify your token has `repo` scope

