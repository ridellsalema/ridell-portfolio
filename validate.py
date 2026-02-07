import asyncio
from playwright.async_api import async_playwright
import os

async def validate_page():
    project_path = r"E:\Coding Projects\Ridell landing page"
    index_path = f"file:///{project_path.replace(os.sep, '/')}/index.html"
    
    errors = []
    warnings = []
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()
        
        # Capture console errors
        page.on("console", lambda msg: errors.append(f"Console {msg.type}: {msg.text}") if msg.type == "error" else None)
        page.on("pageerror", lambda err: errors.append(f"Page error: {err}"))
        
        # Track failed requests
        failed_requests = []
        page.on("requestfailed", lambda req: failed_requests.append(f"Failed: {req.url} - {req.failure}"))
        
        # Load the page
        print(f"Loading: {index_path}")
        response = await page.goto(index_path, wait_until="networkidle", timeout=30000)
        
        if response:
            print(f"Page loaded with status: {response.status}")
        
        # Wait for content
        await page.wait_for_timeout(2000)
        
        # Check for images
        images = await page.query_selector_all("img")
        print(f"\nFound {len(images)} images")
        for img in images:
            src = await img.get_attribute("src")
            natural_width = await img.evaluate("el => el.naturalWidth")
            if natural_width == 0:
                warnings.append(f"Image failed to load: {src}")
            else:
                print(f"  OK: {src}")
        
        # Check for video
        videos = await page.query_selector_all("video")
        print(f"\nFound {len(videos)} videos")
        for video in videos:
            sources = await video.query_selector_all("source")
            for source in sources:
                src = await source.get_attribute("src")
                print(f"  Video source: {src}")
        
        # Check all sections are present
        sections = ["nav", "hero", "about", "skills", "portfolio", "projects", "contact", "footer"]
        print("\nSection validation:")
        for section in sections:
            element = await page.query_selector(f"#{section}, .{section}")
            if element:
                print(f"  OK: {section}")
            else:
                warnings.append(f"Missing section: {section}")
        
        # Take a screenshot
        await page.screenshot(path=os.path.join(project_path, "validation_screenshot.png"), full_page=True)
        print(f"\nScreenshot saved to validation_screenshot.png")
        
        await browser.close()
    
    # Report
    print("\n" + "="*50)
    print("VALIDATION REPORT")
    print("="*50)
    
    if failed_requests:
        print("\nFailed Requests:")
        for req in failed_requests:
            print(f"  - {req}")
    
    if errors:
        print("\nErrors:")
        for err in errors:
            print(f"  - {err}")
    
    if warnings:
        print("\nWarnings:")
        for warn in warnings:
            print(f"  - {warn}")
    
    if not errors and not warnings and not failed_requests:
        print("\nAll validations passed!")
    
    return len(errors) == 0

if __name__ == "__main__":
    result = asyncio.run(validate_page())
    exit(0 if result else 1)
