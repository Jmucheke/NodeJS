CREATE PROCEDURE getFlights(@id VARCHAR(50))
AS
BEGIN
SELECT * FROM FlightsBookings WHERE Id=@id
end
EXEC getFlightsBookings('NJFNVJENJE')