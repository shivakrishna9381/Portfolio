# Quick Start Guide - Layout & Animation Utilities

## 🚀 Quick Navigation

- [Spacing System](#spacing-system)
- [Grid System](#grid-system)
- [Animations](#animations)
- [Transitions](#transitions)
- [Hover Effects](#hover-effects)
- [Component Patterns](#component-patterns)

---

## Spacing System

### Section Padding
```html
<!-- Standard spacing (96px top/bottom) -->
<section class="py-24">Content</section>

<!-- Small spacing (64px) -->
<section class="section-spacing-sm">Content</section>

<!-- Large spacing (128px) -->
<section class="section-spacing-lg">Content</section>
```

### Gap Utilities (for Grid/Flex)
```html
<!-- Tight gap (16px) -->
<div class="flex gap-sm">Item1 Item2</div>

<!-- Base gap (24px) -->
<div class="flex gap-base">Item1 Item2</div>

<!-- Medium gap (32px) -->
<div class="flex gap-md">Item1 Item2</div>

<!-- Large gap (48px) -->
<div class="flex gap-lg">Item1 Item2</div>
```

### Padding Utilities
```html
<!-- Full padding (48px all sides) -->
<div class="p-section">Content</div>

<!-- Horizontal padding -->
<div class="px-section">Content</div>

<!-- Vertical padding - small (32px) -->
<div class="py-sm">Content</div>

<!-- Vertical padding - base (48px) -->
<div class="py-base">Content</div>

<!-- Vertical padding - large (64px) -->
<div class="py-lg">Content</div>
```

### Margin Utilities
```html
<div class="mt-section">Margin top</div>
<div class="mb-section">Margin bottom</div>
<div class="my-section">Margin top & bottom</div>
```

---

## Grid System

### Auto-fit Grid (Responsive Cards)
```html
<!-- Automatically adjusts columns based on screen size -->
<div class="grid-auto-fit">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <!-- Columns adjust: 1 on mobile, 2 on tablet, 3+ on desktop -->
</div>
```

### Balanced Grid
```html
<!-- 320px minimum card width -->
<div class="grid-balanced">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <!-- Converts to single column on mobile -->
</div>
```

### Tailwind Grid
```html
<!-- 2 columns on mobile, 3 on tablet, 4 on desktop -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- ... -->
</div>
```

---

## Animations

### Using Framer Motion in React Components

#### Fade In
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Fade in content
</motion.div>
```

#### Slide Up
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  Slide up content
</motion.div>
```

#### Scroll-Triggered Animation
```jsx
const ref = useRef(null)
const inView = useInView(ref, { once: true, margin: '-100px' })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5 }}
>
  Content appears when scrolled into view
</motion.div>
```

#### Staggered Animation
```jsx
<motion.div initial="hidden" animate="visible" variants={{
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}}>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

### CSS Animation Classes
```html
<!-- Available classes (use in regular HTML/JSX components) -->
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-up">Slide up</div>
<div class="animate-slide-down">Slide down</div>
<div class="animate-slide-left">Slide from left</div>
<div class="animate-slide-right">Slide from right</div>
<div class="animate-scale-in">Scale in</div>
<div class="animate-gentle-pulse">Gentle pulse</div>
<div class="animate-float">Floating animation</div>
<div class="animate-glow">Glowing animation</div>
```

---

## Transitions

### Smooth Color Transition
```html
<div class="transition-smooth hover:bg-blue-500">
  Smoothly transitions background color on hover
</div>
```

### Smooth Transform Transition
```html
<div class="transition-smooth hover:scale-105">
  Smoothly scales on hover
</div>
```

### Different Speeds
```html
<!-- Fast transition (200ms) -->
<div class="transition-smooth-fast hover:text-red-500">Fast</div>

<!-- Base transition (300ms) -->
<div class="transition-smooth hover:text-blue-500">Base</div>

<!-- Slow transition (400ms) -->
<div class="transition-smooth-slow hover:text-green-500">Slow</div>
```

---

## Hover Effects

### Lift Effect
```html
<!-- Moves up (-4px) with shadow on hover -->
<button class="hover-lift">
  Click me
</button>
```

### Scale Effect
```html
<!-- Scales to 102% on hover -->
<div class="hover-scale">
  Scalable content
</div>
```

### Combined Effect (Card)
```html
<div class="group p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
  <div class="group-hover:text-[#7C3AED]">
    Hover affects both container and text
  </div>
</div>
```

---

## Component Patterns

### Basic Section Template
```jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function SectionName() {
  const { isDark } = useTheme()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 relative">
      {/* Optional background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[600px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[120px] 
                      pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold tracking-widest uppercase 
                          ${isDark ? 'text-[#A78BFA]' : 'text-[#7C3AED]'}`}>
            Section Label
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold 
                         font-[family-name:var(--font-heading)] mt-3 
                         ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            Title <span className="gradient-text">Highlight</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-6 rounded-2xl transition-all duration-300 
                          hover:scale-[1.02] ${
                isDark
                  ? 'bg-[#1E293B]/60 border border-white/5 hover:border-[#7C3AED]/30'
                  : 'bg-white border border-gray-100 hover:border-[#7C3AED]/20'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 
                             transition-colors ${
                isDark ? 'bg-[#7C3AED]/10' : 'bg-[#EDE9FE]'
              }`}>
                <item.icon className="text-[#7C3AED]" size={24} />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold font-[family-name:var(--font-heading)] mb-2 
                            ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Card Component with Hover
```jsx
<motion.div
  whileHover={{ y: -4 }}
  className={`p-6 rounded-2xl transition-all duration-300 ${
    isDark
      ? 'bg-[#1E293B]/60 border border-white/5 hover:border-[#7C3AED]/30'
      : 'bg-white border border-gray-100 hover:border-[#7C3AED]/20'
  }`}
>
  {/* Content */}
</motion.div>
```

---

## Dark/Light Theme Usage

### Conditional Styling Pattern
```jsx
const { isDark } = useTheme()

// In JSX:
<div className={`${isDark ? 'bg-dark-color' : 'bg-light-color'}`}>
  Dark/Light theme content
</div>

// For text:
<p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
  Text
</p>

// For borders:
<div className={`border ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
  Content
</div>
```

---

## Color Reference

### Main Theme Colors
```text
Purple Accent:     #7C3AED
Purple Light:      #A78BFA
Dark Purple:       #6D28D9
Darker Purple:     #5B21B6
```

### Dark Mode
```text
Background:        #0F172A
Card Background:   #1E293B
Text Primary:      #F8FAFC (almost white)
Text Secondary:    #94A3B8 (gray)
```

### Light Mode
```text
Background:        #F8FAFC (off-white)
Card Background:   #FFFFFF (white)
Text Primary:      #0F172A (almost black)
Text Secondary:    #475569 (gray)
```

---

## Performance Tips

1. **Use `transform` for animations** - GPU accelerated
   ```jsx
   // ✅ Good
   animate={{ x: 10, y: 20, scale: 1.1 }}
   
   // ❌ Avoid
   animate={{ left: 10, top: 20, width: 100 }}
   ```

2. **Use `opacity` for fade effects** - Very fast
   ```jsx
   animate={{ opacity: 0.5 }}
   ```

3. **Set `once: true` for scroll animations** - Only animate once
   ```jsx
   const inView = useInView(ref, { once: true, margin: '-100px' })
   ```

4. **Use proper `transition` durations** - 0.3-0.7s for most animations
   ```jsx
   transition={{ duration: 0.5, ease: 'easeOut' }}
   ```

---

## Debugging Tips

### Check Animation Timing
```jsx
// Add console logs to verify animation trigger
console.log('Component in view:', inView)
```

### Visual Debug Grid
```html
<!-- Add to see grid spacing -->
<div class="border border-red-500">Debug container</div>
```

### Responsive Debug
```jsx
// Check current breakpoint
{isDark && <pre>Dark mode active</pre>}
```

---

## Common Issues & Solutions

### Animation not triggering
**Solution:** Ensure `ref={ref}` is on section and `once: true` in useInView

### Grid not stacking on mobile
**Solution:** Check that your grid classes use responsive prefixes (e.g., `grid-cols-1 md:grid-cols-2`)

### Colors not theme-aware
**Solution:** Always use conditional className: `${isDark ? 'dark-color' : 'light-color'}`

### Hover effects not working
**Solution:** Add `group` class to parent and `group-hover:` to children for grouped effects

---

## Quick Copy-Paste Examples

### Animated Button
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] 
             to-[#6D28D9] text-white font-semibold transition-all 
             duration-300 hover:shadow-lg"
>
  Click Me
</motion.button>
```

### Floating Card
```jsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
  className="p-6 rounded-2xl bg-white shadow-lg"
>
  Floating Card
</motion.div>
```

### Section with Staggered Items
```jsx
<section className="py-24">
  <div className="max-w-[1200px] mx-auto px-6">
    <motion.div initial="hidden" animate="visible" variants={{
      visible: { transition: { staggerChildren: 0.1 } }
    }}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {item.name}
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
```

---

**Happy coding! 🚀**
