# Specification

## Summary
**Goal:** Replace landing page image sources to use the provided GitHub raw JPEG URLs everywhere images appear on the landing page.

**Planned changes:**
- Update `frontend/src/constants/landingImages.ts` to replace current `/assets/uploads/*` paths with exactly 7 provided `https://raw.githubusercontent.com/Automation8248/Digi-affiliate-blog-/main/images/provadent/*.jpeg` URLs mapped to `LANDING_IMAGES` keys: `hero`, `solution`, `benefitsStrip1`, `benefitsStrip2`, `ingredients`, `testimonials`, `strongCta`.
- Ensure all landing page sections render images exclusively through `LANDING_IMAGES` imports (no hardcoded `/assets/uploads/*` paths in section components).
- Keep CTA behavior unchanged: all CTA buttons remain labeled “Buy Now” and continue redirecting to `https://dentalsugarhack.vip/discovery#aff=Nexora_8248`.

**User-visible outcome:** The landing page continues to look the same and all images load successfully, now sourced from the provided GitHub raw URLs, with CTAs unchanged.
