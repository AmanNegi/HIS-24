# Comprehensive Contract Farming Backend Routes

## 1. Farmer Routes
- POST /farmer/register: Register a new farmer with details like name, location, and Aadhar.
- POST /farmer/login: Authenticate a farmer and provide access to their account.
- GET /farmer/:id: Fetch the profile information of a farmer by ID.
- PUT /farmer/:id: Update a farmer's profile or location information.
- DELETE /farmer/:id: Delete a farmer's profile (soft delete or permanently).
- GET /farmer/:id/contracts: Get all contracts a farmer has participated in.

## 2. Contractor Routes
- POST /contractor/register: Register a new contractor.
- POST /contractor/login: Authenticate a contractor.
- GET /contractor/:id: Fetch the profile information of a contractor by ID.
- PUT /contractor/:id: Update the contractor's details.
- DELETE /contractor/:id: Delete a contractor's profile.
- GET /contractor/:id/contracts: Retrieve all contracts a contractor has created or participated in.


## 3. Contract Routes
- POST /contract/create: Create a new contract between a farmer and contractor.
- GET /contract/:id: Fetch details of a specific contract using its ID.
- GET /contract: Fetch contracts based on query parameters.
- PUT /contract/:id/update: Update a contract's status or other details.
- POST /contract/:id/upload: Upload or update the contract PDF.
- PUT /contract/:id/payment/update: Update the payment milestones.
- DELETE /contract/:id: Cancel or delete a contract by its ID.
- POST /contract/:id/dispute: Raise a dispute for a contract.


## 4. Payment Routes
- GET /payment/:contractId: Fetch payment details and milestones of a specific contract.
- PUT /payment/:contractId/milestone/:milestoneId: Update the payment status for a specific milestone.
- POST /payment/initiate: Initiate a payment for a contract milestone.
- GET /payment/history/:userId: Get payment history for a user (farmer or contractor).


## 5. Crop Routes (Crop schema is there)
### Crop shema wil be associated with farmer(ID)
### It's crop farmer will Sow
- POST /crop/create: Add a new crop to the system.
- GET /crop/:id: Fetch details of a specific crop.
- GET /crop/list: Get a list of all available crops.
- PUT /crop/:id/update: Update crop details.
- DELETE /crop/:id: Remove a crop from the system.
- GET /crop/:id/contracts: Get all contracts associated with a specific crop.


## 6. Farm Location & Search Routes
- GET /farms/nearby: Find farms within a certain radius of a given latitude and longitude.
- GET /farmer/:id/farms: Get all farms belonging to a specific farmer by ID.
- POST /farm/register: Register a new farm with location and area details.
- PUT /farm/:id/update: Update farm details.


## 7. Notification Routes
- GET /notifications/:userId: Fetch notifications for a user.
- POST /notifications/send: Send a new notification to users.
- PUT /notifications/:id/mark-read: Mark a specific notification as read.
- DELETE /notifications/:id: Delete a notification.

## 8. Contract Management Routes

- GET /contracts/farmer/:farmerId: Retrieve all contracts related to a specific farmer.
- GET /contracts/contractor/:contractorId: Retrieve all contracts related to a specific contractor.
- GET /contracts/upcoming: Get contracts that are about to start.
- GET /contracts/overdue: Get contracts with overdue payments or milestones.

## 9. Insurance Routes

???

## 10. Admin Routes
???

## 11. Authentication & User Management (MAYBE)
- POST /auth/forgot-password: Trigger password reset functionality.
- POST /auth/reset-password: Allow users to reset their password.
- POST /auth/change-password: Change password when logged in.
- POST /auth/logout: Log out a user.
- GET /auth/session: Get current session information.

## 12. Search & Filter Routes
- GET /search/contracts: Search contracts with filters.
- GET /search/farmers: Find farmers based on location or crops grown.
- GET /search/contractors: Find contractors based on location or crops they are interested in.
- GET /search/crops: Search for crops based on various criteria.


# ADD WHAT's more needed