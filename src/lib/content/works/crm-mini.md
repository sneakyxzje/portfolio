---
title: 'ZenCRM Platform'
description: ''
date: '2024-12-14'
order: 2
---

## Description

ZenCRM is a full-stack application focused on the core functionalities of a CRM system: Lead tracking and Order processing. Built with React 18 and Spring Boot, the project demonstrates essential business logic implementation, secure role-based access, and real-time updates without the complexity of a legacy enterprise system.

## Responsibilities

- Frontend Architecture: Structured the React codebase using Feature-Sliced Design (FSD) to separate domain entities, business features, and UI layers for better maintainability.

- State Management: Applied a hybrid state approach using Redux Toolkit for authentication state, React Query for server-side data fetching and caching, and React Context for localized UI state.

- Backend Development: Developed RESTful APIs with Spring Boot following a layered architecture, handling entity relationships using JPA/Hibernate and DTO-based data transfer.

- Authentication & Authorization: Implemented JWT-based authentication with role-based access control (RBAC), enforcing permissions at both backend endpoints (Spring Security) and frontend route guards.

- Real-Time Features: Integrated WebSocket (STOMP) to deliver real-time notifications for lead assignments and order status updates.

- Database Design: Designed and implemented a relational PostgreSQL schema with proper foreign key relationships and cascade rules to maintain data consistency.

- Error Handling & UX: Implemented global exception handling on the backend and loading states, form validation, and user feedback on the frontend.

## Key Features

- **Lead Management**: Create, track, and assign leads through sales pipeline; bulk CSV upload; real-time search and filtering
- **Order Management**: Create orders from qualified leads; track order status and history; manage combo offers with bundled products
- **Role-Based Dashboards**: 6 distinct user roles (Admin, Marketing, Sales, Sales Manager, Warehouse, Marketing Manager) each with dedicated dashboard showing role-specific metrics
- **Real-Time Notifications**: WebSocket integration for instant lead assignment and order status updates without page refresh
- **Complete Authorization**: Role-based access control enforced at both API (Spring Security) and UI (React Route Guards) levels
- **Analytics & Reporting**: System-wide dashboard with user metrics, lead statistics, order performance, and growth trend charts
- **Activity Logging**: Complete audit trail tracking all lead changes with timestamps and user information
- **Product Catalog**: Manage products with categories, organize inventory by unit types, define combo offers with gift items

## Techstack

**Frontend**

- React 18, Typescript
- Redux Toolkit for global state management
- React Query for server-side caching and synchronization
- React Router for client-side routing
- TailwindCSS for responsive styling
- Framer Motion for animations
- Axios with request/response interceptors

**Backend**

- Spring Boot 3.0+ with Spring Security
- Spring Data JPA with Hibernate ORM
- PostgreSQL
- WebSocket for real-time bidirectional communication
- JWT (JSON Web Tokens) for authentication

**Architecture & Design Patterns**

- Feature-Sliced Design (FSD) for organized code structure
- Custom Hooks pattern for reusable business logic
- Repository pattern for data access layer
- Interceptor pattern for HTTP request/response handling
- Observer pattern for state management
- MVC pattern for backend organization
