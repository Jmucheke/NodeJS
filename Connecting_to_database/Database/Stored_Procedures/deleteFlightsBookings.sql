CREATE PROCEDURE getFlightsBookings(@id VARCHAR(50))
AS
BEGIN
DELETE * FROM FlightsBookings WHERE Id=@id
end
EXEC getFlightsBookings('NJFNVJENJE')