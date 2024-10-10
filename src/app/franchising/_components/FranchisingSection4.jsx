const FranchisingSection4 = () => {
  return (
    <section className="py-24 bg-sectionColor">
      <div className="container mx-auto">
        <h2 className="custom-h2">invesmtnent</h2>
        <table class="franchise-table container mx-auto">
          <thead>
            <tr>
              <th>Type of Expenditure</th>
              <th>Method of Payment</th>
              <th>When Due</th>
              <th>To Whom Payment is to Be Made</th>
              <th>Actual or Estimated Amounts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Initial Franchise Fee</td>
              <td>Lump Sum</td>
              <td>On Signing of the Franchise Agreement</td>
              <td>Franchisor</td>
              <td>$18,500</td>
            </tr>
            <tr>
              <td>Rent/Lease CAM/Taxes/Lease and Utility Security Deposits</td>
              <td>Monthly</td>
              <td>Monthly</td>
              <td>Landlord</td>
              <td>$0 - $67,709</td>
            </tr>
            <tr>
              <td>Architectural Fees</td>
              <td>As Incurred</td>
              <td>As Arranged</td>
              <td>Approved Suppliers</td>
              <td>$2,389 - $28,796</td>
            </tr>
            <tr>
              <td>Leasehold Improvements</td>
              <td>As Arranged</td>
              <td>As Arranged</td>
              <td>Landlord or Contractors</td>
              <td>$110,000 - $762,064</td>
            </tr>
            <tr>
              <td>Equipment/Furniture/Small Wares</td>
              <td>As Arranged</td>
              <td>As Arranged</td>
              <td>Designated and Approved Suppliers</td>
              <td>$28,961 - $152,550</td>
            </tr>
            <tr>
              <td>Initial Inventory</td>
              <td>As Arranged</td>
              <td>As Arranged</td>
              <td>Designated and Approved Suppliers</td>
              <td>$4,200 - $27,465</td>
            </tr>
            <tr>
              <td>Insurance</td>
              <td>As Arranged</td>
              <td>As Arranged</td>
              <td>Your Insurance Company</td>
              <td>$1,000 - $13,829</td>
            </tr>
            <tr>
              <td>Training</td>
              <td>As Incurred</td>
              <td>As Incurred</td>
              <td>Transportation, Hotels, Restaurants, Staff Salaries</td>
              <td>$2,000 - $86,400</td>
            </tr>
            <tr>
              <td>Grand Opening Advertising</td>
              <td>Lump Sum</td>
              <td>On Signing Lease</td>
              <td>Franchisor</td>
              <td>$12,500</td>
            </tr>
            <tr>
              <td>Exterior Signage</td>
              <td>As Arranged</td>
              <td>As Arranged</td>
              <td>Approved Suppliers</td>
              <td>$2,370 - $53,100</td>
            </tr>
            <tr>
              <td>Interior Branding/Graphics</td>
              <td>As Incurred</td>
              <td>As Incurred</td>
              <td>Approved Suppliers</td>
              <td>$3,074 - $14,684</td>
            </tr>
            <tr>
              <td>
                Uniforms, Office Equipment, and Supplies, TVs/Stereo
                System/Security System
              </td>
              <td>As Incurred</td>
              <td>As Incurred</td>
              <td>Designated and Approved Suppliers</td>
              <td>$3,258 - $38,531</td>
            </tr>
            <tr>
              <td>POS System</td>
              <td>As Incurred</td>
              <td>As Incurred</td>
              <td>Designated Suppliers</td>
              <td>$2,085 - $17,452</td>
            </tr>
            <tr>
              <td>POS System Connection to Private Network</td>
              <td>As Incurred</td>
              <td>Prior to Opening</td>
              <td>Franchisor</td>
              <td>$3,000</td>
            </tr>
            <tr>
              <td>Professional Fees</td>
              <td>As Incurred</td>
              <td>As Incurred</td>
              <td>Accountant, Solicitor</td>
              <td>$800 - $18,000</td>
            </tr>
            <tr>
              <td>Business Licenses and Permits</td>
              <td>As Incurred</td>
              <td>As Incurred</td>
              <td>Local Municipality, State</td>
              <td>$312 - $18,000</td>
            </tr>
            <tr>
              <td>Additional Funds for 3 months</td>
              <td>As Incurred</td>
              <td>As Incurred</td>
              <td>Approved Suppliers, Employees</td>
              <td>$15,000</td>
            </tr>
            {/* <!-- More rows can be added similarly --> */}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4"></td>
              <td>
                Total:<span>$209,449 - $1,347,580</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default FranchisingSection4;
