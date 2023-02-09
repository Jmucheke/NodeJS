CREATE PROCEDURE InsertOrUpdate(@id VARCHAR(50), @name VARCHAR(100)=NULL, @email VARCHAR(100)=NULL, @destination VARCHAR(100)=NULL, @date DATE)
AS
BEGIN
IF EXISTS(SELECT * FROM FlightsBookings WHERE Id = @id)
BEGIN
UPDATE FlightsBookings SET Name = @name, Email=@email, Destination=@destination, TravelDate=@date
WHERE Id = @id
END
ELSE
BEGIN
INSERT INTO FlightsBookings (Id, Name, Email, Destination, TravelDate)
VALUES (@IdleDeadline,@name,@email, @destination, @date)
END
END

SELECT * FROM FlightBookings
EXEC InsertOrUpdate @id='nfjrnoirifnr', @name='John Doe', @email='john@gmail.com', @destination='Mumbai', @date='2023-02-07T11:56:34.534534+03:00'