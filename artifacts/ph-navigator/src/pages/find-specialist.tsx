import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Hospital, Info } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for specialist centres
const centres = [
  { id: 1, state: 'NSW', name: 'St Vincent\'s Hospital', city: 'Darlinghurst', phone: '(02) 8382 1111', type: 'Adult' },
  { id: 2, state: 'NSW', name: 'Royal Prince Alfred Hospital', city: 'Darlinghurst', phone: '(02) 9515 6111', type: 'Adult' },
  { id: 3, state: 'VIC', name: 'The Alfred Hospital', city: 'Melbourne', phone: '(03) 9076 2000', type: 'Adult' },
  { id: 4, state: 'VIC', name: 'Austin Hospital', city: 'Heidelberg', phone: '(03) 9496 5000', type: 'Adult' },
  { id: 5, state: 'QLD', name: 'The Prince Charles Hospital', city: 'Chermside', phone: '(07) 3139 4000', type: 'Adult' },
  { id: 6, state: 'SA', name: 'Royal Adelaide Hospital', city: 'Adelaide', phone: '(08) 7074 0000', type: 'Adult' },
  { id: 7, state: 'WA', name: 'Royal Perth Hospital', city: 'Perth', phone: '(08) 9224 2244', type: 'Adult' },
  { id: 8, state: 'WA', name: 'Fiona Stanley Hospital', city: 'Murdoch', phone: '(08) 6152 2222', type: 'Adult' },
  { id: 9, state: 'ACT', name: 'Canberra Hospital', city: 'Garran', phone: '(02) 5124 0000', type: 'Adult' },
  { id: 10, state: 'NSW', name: 'Sydney Children\'s Hospital', city: 'Randwick', phone: '(02) 9382 1111', type: 'Paediatric' },
  { id: 11, state: 'VIC', name: 'Royal Children\'s Hospital', city: 'Parkville', phone: '(03) 9345 5522', type: 'Paediatric' },
];

export default function FindSpecialist() {
  const [selectedState, setSelectedState] = useState<string>('All');

  const filteredCentres = selectedState === 'All' 
    ? centres 
    : centres.filter(c => c.state === selectedState);

  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Find a Specialist Centre</h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              Pulmonary hypertension requires highly specialised care. These designated centres across Australia have multidisciplinary teams experienced in treating PH.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="bg-accent/10 border border-accent/20 p-6 rounded-xl mb-12 flex gap-4 items-start">
            <Info className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="m-0 text-foreground/90">
                <strong>Telehealth Options:</strong> If you live in a regional or rural area, many of these centres offer telehealth (video) appointments for follow-up consultations. You may still need to travel for specialised tests (like a right heart catheterisation), but your travel burden can be significantly reduced. Discuss this when booking.
              </p>
            </div>
          </div>

          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between border-b pb-6">
            <h2 className="text-2xl font-serif font-bold text-primary">Directory</h2>
            <div className="w-full sm:w-64">
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All States & Territories</SelectItem>
                  <SelectItem value="NSW">New South Wales</SelectItem>
                  <SelectItem value="VIC">Victoria</SelectItem>
                  <SelectItem value="QLD">Queensland</SelectItem>
                  <SelectItem value="SA">South Australia</SelectItem>
                  <SelectItem value="WA">Western Australia</SelectItem>
                  <SelectItem value="ACT">ACT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCentres.map((centre) => (
              <Card key={centre.id} className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3 border-b bg-muted/20">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-primary">{centre.name}</CardTitle>
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
                      {centre.state}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 font-medium">{centre.type} PH Centre</p>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex items-start gap-3 text-foreground/80">
                    <MapPin className="h-5 w-5 text-secondary shrink-0" />
                    <span>{centre.city}</span>
                  </div>
                  <div className="flex items-start gap-3 text-foreground/80">
                    <Phone className="h-5 w-5 text-secondary shrink-0" />
                    <span>{centre.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredCentres.length === 0 && (
              <div className="col-span-full text-center py-12 text-foreground/60 text-lg">
                No specialist centres listed for the selected state. Please select 'All' or choose a neighbouring state.
              </div>
            )}
          </div>

          <div className="mt-16 text-sm text-foreground/60 text-center">
            <p>This directory is maintained jointly by PHA Australia and PHSANZ. If your hospital details are incorrect, please contact us for an update.</p>
          </div>

        </div>
      </section>
    </div>
  );
}
