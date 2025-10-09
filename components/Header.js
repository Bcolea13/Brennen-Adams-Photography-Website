/* Header */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  width: 100%;
}

.header-inner {
  height: 72px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* pushes logo left, nav right */
  width: 100%;
}

/* Brand block */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.brand-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  display: block;
}

.brand-text {
  font-size: 20px;
  line-height: 1;
}

/* Top-right nav */
.main-nav {
  display: flex;
  gap: 28px;
  align-items: center;
  margin-left: auto; /* ensures nav hugs the right edge */
}

.main-nav a {
  color: var(--muted);
  padding: 6px 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
}

.main-nav a:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}
