import Text "mo:core/Text";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Time "mo:core/Time";

actor {
  type Product = {
    name : Text;
    description : Text;
    category : Text;
  };

  type BrandInfo = {
    tagline : Text;
    aboutText : Text;
    foundingYear : Nat;
  };

  type NewsEvent = {
    title : Text;
    date : Time.Time;
    description : Text;
  };

  module NewsEvent {
    public func compare(event1 : NewsEvent, event2 : NewsEvent) : Order.Order {
      Int.compare(event2.date, event1.date); // Sort descending
    };
  };

  let products : [Product] = [
    {
      name = "Purabi Milk";
      description = "Fresh pasteurized milk from local farms.";
      category = "Dairy";
    },
    {
      name = "Purabi Paneer";
      description = "Soft and creamy cottage cheese.";
      category = "Dairy";
    },
    {
      name = "Purabi Butter";
      description = "Smooth and rich butter for baking and cooking.";
      category = "Dairy";
    },
  ];

  let brandInfo : BrandInfo = {
    tagline = "Healthy, Fresh, Local";
    aboutText = "Purabi Dairy has been providing high quality dairy products since 1963. Our mission is to support local farmers and deliver healthy nutrition to all families in Assam and beyond.";
    foundingYear = 1963;
  };

  let newsEvents : [NewsEvent] = [
    {
      title = "Silchar Plant Inauguration";
      date = 1709337600000000000;
      description = "Purabi Dairy inaugurated its new processing plant in Silchar, expanding its reach and supporting more local dairy farmers.";
    },
  ];

  public query ({ caller }) func getProducts() : async [Product] {
    products;
  };

  public query ({ caller }) func getBrandInfo() : async BrandInfo {
    brandInfo;
  };

  public query ({ caller }) func getNewsEvents() : async [NewsEvent] {
    newsEvents.sort(); // Now sorted in descending order
  };
};
