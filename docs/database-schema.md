# Database Schema

## Overview

The Rehearsal Scheduler application uses a PostgreSQL database with the following tables:

## Tables

### Users
- **id** (PK) - UUID
- **email** - STRING, UNIQUE
- **password_hash** - STRING
- **first_name** - STRING
- **last_name** - STRING
- **phone_number** - STRING, NULLABLE
- **created_at** - DATETIME
- **updated_at** - DATETIME

### UserProfiles
- **id** (PK) - UUID
- **user_id** (FK to Users) - UUID
- **profile_image_url** - STRING, NULLABLE
- **bio** - TEXT, NULLABLE
- **instruments** - JSONB
- **notification_preferences** - JSONB
- **time_zone** - STRING
- **created_at** - DATETIME
- **updated_at** - DATETIME

### Bands
- **id** (PK) - UUID
- **name** - STRING
- **description** - TEXT, NULLABLE
- **logo_url** - STRING, NULLABLE
- **created_by** (FK to Users) - UUID
- **created_at** - DATETIME
- **updated_at** - DATETIME

### BandMembers
- **id** (PK) - UUID
- **band_id** (FK to Bands) - UUID
- **user_id** (FK to Users) - UUID
- **role** - ENUM ('leader', 'member')
- **instruments** - JSONB
- **join_date** - DATETIME
- **status** - ENUM ('active', 'inactive')

### Venues
- **id** (PK) - UUID
- **band_id** (FK to Bands) - UUID
- **name** - STRING
- **address** - TEXT, NULLABLE
- **notes** - TEXT, NULLABLE
- **created_at** - DATETIME
- **updated_at** - DATETIME

### Rehearsals
- **id** (PK) - UUID
- **band_id** (FK to Bands) - UUID
- **venue_id** (FK to Venues) - UUID, NULLABLE
- **title** - STRING
- **description** - TEXT, NULLABLE
- **start_time** - DATETIME
- **end_time** - DATETIME
- **is_recurring** - BOOLEAN
- **recurrence_pattern** - JSONB, NULLABLE
- **created_by** (FK to Users) - UUID
- **created_at** - DATETIME
- **updated_at** - DATETIME

### MemberAvailability
- **id** (PK) - UUID
- **user_id** (FK to Users) - UUID
- **band_id** (FK to Bands) - UUID
- **day_of_week** - INTEGER, NULLABLE
- **start_time** - TIME, NULLABLE
- **end_time** - TIME, NULLABLE
- **is_recurring** - BOOLEAN
- **specific_date** - DATE, NULLABLE
- **created_at** - DATETIME
- **updated_at** - DATETIME

### Attendance
- **id** (PK) - UUID
- **rehearsal_id** (FK to Rehearsals) - UUID
- **user_id** (FK to Users) - UUID
- **status** - ENUM ('confirmed', 'declined', 'tentative', 'no_response')
- **notes** - TEXT, NULLABLE
- **updated_at** - DATETIME

### Songs
- **id** (PK) - UUID
- **band_id** (FK to Bands) - UUID
- **title** - STRING
- **artist** - STRING, NULLABLE
- **duration** - INTEGER, NULLABLE
- **notes** - TEXT, NULLABLE
- **created_by** (FK to Users) - UUID
- **created_at** - DATETIME
- **updated_at** - DATETIME

### Setlists
- **id** (PK) - UUID
- **band_id** (FK to Bands) - UUID
- **rehearsal_id** (FK to Rehearsals) - UUID, NULLABLE
- **title** - STRING
- **notes** - TEXT, NULLABLE
- **created_by** (FK to Users) - UUID
- **created_at** - DATETIME
- **updated_at** - DATETIME

### SetlistSongs
- **id** (PK) - UUID
- **setlist_id** (FK to Setlists) - UUID
- **song_id** (FK to Songs) - UUID
- **position** - INTEGER
- **notes** - TEXT, NULLABLE

### SongFiles
- **id** (PK) - UUID
- **song_id** (FK to Songs) - UUID
- **file_name** - STRING
- **file_url** - STRING
- **file_type** - STRING
- **uploaded_by** (FK to Users) - UUID
- **uploaded_at** - DATETIME

### RehearsalNotes
- **id** (PK) - UUID
- **rehearsal_id** (FK to Rehearsals) - UUID
- **user_id** (FK to Users) - UUID
- **content** - TEXT
- **created_at** - DATETIME
- **updated_at** - DATETIME

### Notifications
- **id** (PK) - UUID
- **user_id** (FK to Users) - UUID
- **type** - ENUM ('rehearsal_reminder', 'change_alert', 'comment', etc.)
- **content** - TEXT
- **reference_id** - UUID
- **reference_type** - STRING
- **is_read** - BOOLEAN
- **created_at** - DATETIME

## Relationships

- A User can be a member of multiple Bands (through BandMembers)
- A Band can have multiple Users (through BandMembers)
- A Band can have multiple Rehearsals
- A Band can have multiple Venues
- A Band can have multiple Songs
- A Rehearsal can have one Setlist
- A Setlist can have multiple Songs (through SetlistSongs)
- A Song can be in multiple Setlists (through SetlistSongs)
- A Song can have multiple SongFiles
- A Rehearsal can have multiple Attendance records
- A User can have multiple Attendance records
- A User can have multiple MemberAvailability records
- A Rehearsal can have multiple RehearsalNotes
- A User can have multiple Notifications