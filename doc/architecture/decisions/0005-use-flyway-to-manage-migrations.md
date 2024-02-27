# 5. Use Flyway to manage migrations

Date: 2024-02-27

## Status

Accepted

## Context

We need an easy way to handle migrations of database tables.

## Decision

Flyway provides a lightweight and language agnostic way of managing migrations.

## Consequences

Flyway requires knowledge of their naming scheme (ie. V1.1__first_migration.sql) and some configuration to get working.
