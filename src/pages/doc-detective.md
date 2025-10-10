# Doc Detective

**An open-source documentation testing framework that validates your docs against your product.**

## Overview

Doc Detective is a tool that treats documentation as testable code. It automates the process of verifying that your documentation accurately reflects your product's behavior, catching broken instructions, outdated screenshots, and integration issues before your users encounter them.

## What It Does

Doc Detective helps you:

- **Test documentation workflows**: Validate that step-by-step instructions actually work
- **Verify UI interactions**: Ensure buttons, forms, and navigation paths exist as documented
- **Capture screenshots**: Automatically generate and update documentation screenshots
- **Detect breaking changes**: Get notified when product updates break existing docs
- **Integrate with CI/CD**: Run documentation tests as part of your development pipeline

## Key Features

### Automated Testing

Write test specifications alongside your documentation. Doc Detective executes these tests against your actual product, verifying that documented procedures work as expected.

### Screenshot Management

Generate screenshots programmatically. When UI changes, tests can automatically capture updated images, reducing manual screenshot maintenance.

### Cross-Platform Support

Test documentation across different browsers, operating systems, and device configurations to ensure consistent user experience.

### CI/CD Integration

Integrate Doc Detective into your continuous integration pipeline. Catch documentation issues early in the development cycle, just like code defects.

### Flexible Configuration

Support for various documentation formats (Markdown, HTML, custom formats) and testing scenarios (API testing, UI testing, command-line testing).

## Getting Started

### Installation

```bash
npm install -g doc-detective
```

### Quick Example

```json
{
  "tests": [
    {
      "id": "verify-login",
      "description": "Test login workflow",
      "steps": [
        { "action": "goTo", "url": "https://example.com/login" },
        { "action": "typeKeys", "keys": "user@example.com", "elementId": "email" },
        { "action": "typeKeys", "keys": "password123", "elementId": "password" },
        { "action": "click", "elementId": "login-button" },
        { "action": "wait", "duration": 2000 },
        { "action": "checkLink", "url": "https://example.com/dashboard" }
      ]
    }
  ]
}
```

Run the test:

```bash
doc-detective runTests --input config.json
```

## Resources

- **[Official Website](https://doc-detective.com)** - Full documentation and guides
- **[GitHub Repository](https://github.com/doc-detective/doc-detective)** - Source code and issue tracking
- **[Getting Started Guide](https://doc-detective.com/docs/start)** - Step-by-step setup instructions
- **[API Reference](https://doc-detective.com/docs/reference)** - Complete API documentation

## Use Cases

### Product Documentation

Test that user guides, tutorials, and how-to articles accurately reflect your product's current state.

### API Documentation

Validate that API examples, authentication flows, and integration guides work as documented.

### Developer Onboarding

Ensure setup guides, quickstart tutorials, and environment configurations are accurate and up-to-date.

### Release Validation

Automatically verify documentation before and after product releases to catch breaking changes.

## Community & Support

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Share use cases and best practices
- **Contributing**: Help improve the project—contributions welcome

## Philosophy

Doc Detective is built on the principle that documentation should be treated like code. By applying software testing practices to documentation, teams can build more reliable, maintainable, and user-friendly docs.

---

*Want to learn more about the docs-as-tests approach? Check out the [Docs as Tests Book](/book) or explore [talks and presentations](/talks) on the topic.*
